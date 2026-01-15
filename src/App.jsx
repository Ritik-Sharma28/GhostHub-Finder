import { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import AnimeLoader from './components/AnimeLoader';
import ErrorView from './components/ErrorView';
import animeWelcome from './assets/anime-welcome.png';
import animeTease from './assets/anime-tease.png';

function App() {
  const [status, setStatus] = useState('initial');
  const [userData, setUserData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [currentErrorImg, setCurrentErrorImg] = useState(null);

  const fetchUser = async (rawUsername) => {
    const username = rawUsername.trim();

    if (!username) {
      setStatus('error');
      setErrorMsg("U think u can search without input? 😂");
      setCurrentErrorImg(animeTease);
      return;
    }

    setStatus('loading');
    setErrorMsg('');
    setCurrentErrorImg(null);

    const minLoadTime = new Promise(resolve => setTimeout(resolve, 1500));

    try {
      const [response] = await Promise.all([
        axios.get(`https://api.github.com/users/${username}`),
        minLoadTime
      ]);

      setUserData(response.data);
      setStatus('success');
    } catch (err) {
      await minLoadTime;
      setStatus('error');
      setCurrentErrorImg(null);
      if (err.response && err.response.status === 404) {
        setErrorMsg(`User "${username}" not found.`);
      } else {
        setErrorMsg("Something went wrong with the connection.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="mb-8 z-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 mb-2 drop-shadow-sm font-outfit">
          GhostHub Explorer
        </h1>
        <p className="text-gray-400">Discover GitHub profiles with style</p>
      </div>

      <div className="w-full flex flex-col items-center z-20 min-h-[500px]">
        <SearchBar onSearch={fetchUser} />

        <div className="mt-8 w-full flex justify-center items-center flex-1">
          {status === 'initial' && (
            <div className="text-center animate-fade-in">
              <img
                src={animeWelcome}
                alt="Welcome"
                className="w-64 h-64 object-contain mx-auto mb-4 drop-shadow-2xl animate-float"
              />
              <p className="text-xl text-gray-300 font-light max-w-md mx-auto">
                Ready to summon a developer? <br />
                <span className="text-blue-400 font-medium">Type a username above!</span>
              </p>
            </div>
          )}

          {status === 'loading' && <AnimeLoader />}

          {status === 'success' && userData && (
            <UserCard user={userData} />
          )}

          {status === 'error' && <ErrorView message={errorMsg} image={currentErrorImg} />}
        </div>
      </div>

      <footer className="absolute bottom-4 text-center text-gray-600 text-sm">
        Made with 💜 using React-Vite , Tailwind CSS and My Brain Obvious BRO!!
      </footer>
    </div>
  );
}

export default App;
