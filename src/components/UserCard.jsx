import React from 'react';

const StatCard = ({ label, value, color }) => (
    <div className="flex flex-col items-center bg-black/20 rounded-xl p-3 border border-white/5 hover:bg-white/5 transition duration-300">
        <span className={`text-2xl font-bold ${color}`}>{value}</span>
        <span className="text-xs text-gray-400 uppercase tracking-wider">{label}</span>
    </div>
);

const UserCard = ({ user }) => {
    return (
        <div className="glass max-w-2xl w-full mx-4 rounded-3xl overflow-hidden animate-slide-up relative mt-8">
            
            <div className="h-32 bg-gradient-to-r from-blue-900 to-purple-900 relative opacity-80">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="px-8 pb-8 flex flex-col items-center -mt-16">
               
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                    <img
                        src={user.avatar_url}
                        alt={user.login}
                        className="w-32 h-32 rounded-full border-4 border-[#1a1a2e] relative z-10 shadow-2xl object-cover"
                    />
                    
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-[#1a1a2e] rounded-full z-20"></div>
                </div>

                <h1 className="mt-4 text-3xl font-bold text-white text-center">
                    {user.name || user.login}
                </h1>
                <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-mono text-sm mt-1 transition"
                >
                    @{user.login}
                </a>

                <p className="mt-4 text-center text-gray-300 max-w-md leading-relaxed">
                    {user.bio || "This user prefers to keep an air of mystery..."}
                </p>

                
                <div className="grid grid-cols-3 gap-4 w-full max-w-md mt-8">
                    <StatCard label="Followers" value={user.followers} color="text-pink-400" />
                    <StatCard label="Following" value={user.following} color="text-purple-400" />
                    <StatCard label="Repos" value={user.public_repos} color="text-blue-400" />
                </div>

               
                <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 px-8 py-3 bg-white text-[#1a1a2e] font-bold rounded-xl hover:bg-blue-50 transition transform hover:-translate-y-1 shadow-lg shadow-white/10"
                >
                    Visit Github Profile
                </a>

                <div className="flex gap-4 mt-6 text-sm text-gray-400">
                    {user.location && (
                        <span className="flex items-center gap-1">
                            📍 {user.location}
                        </span>
                    )}
                    {user.company && (
                        <span className="flex items-center gap-1">
                            💼 {user.company}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserCard;
