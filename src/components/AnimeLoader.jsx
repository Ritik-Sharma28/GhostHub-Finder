import React from 'react';
import animeLoading from '../assets/anime-loading.png';

const AnimeLoader = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8 animate-fade-in">
            <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>


                <img
                    src={animeLoading}
                    alt="Loading..."
                    className="w-48 h-48 object-cover rounded-full animate-float drop-shadow-2xl relative z-10 border-4 border-white/20 bg-white/5"
                />


                <div className="absolute -inset-4 border-2 border-transparent border-t-purple-400 border-b-blue-400 rounded-full animate-spin-slow pointer-events-none opacity-60"></div>
            </div>

            <h2 className="mt-6 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200 animate-pulse">
                Summoning Profile...
            </h2>
        </div>
    );
};

export default AnimeLoader;
