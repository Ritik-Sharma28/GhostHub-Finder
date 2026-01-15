import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(username);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg relative group z-20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative flex items-center bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-2 shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>

                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub Username..."
                    className="w-full bg-transparent border-none outline-none text-white placeholder-gray-400 px-4 py-3 font-outfit text-lg"
                />

                <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 px-6 rounded-xl transition transform hover:scale-105 active:scale-95 shadow-lg"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
