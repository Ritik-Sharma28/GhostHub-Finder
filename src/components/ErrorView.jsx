import animeError from '../assets/anime-error.png';

const ErrorView = ({ message, image }) => {
    return (
        <div className="glass flex flex-col items-center p-8 rounded-3xl max-w-md w-full mx-4 animate-bounce-in text-center border-red-500/30 shadow-[0_0_50px_-12px_rgba(239,68,68,0.3)]">
            <img
                src={image || animeError}
                alt="Error"
                className="w-40 h-40 object-contain mb-4 drop-shadow-lg"
            />
            <h3 className="text-2xl font-bold text-red-200 mb-2">OOPS!</h3>
            <p className="text-gray-300 text-lg mb-4">
                {message || "We couldn't find that user in our archives."}
            </p>
            <div className="text-sm text-gray-400 bg-black/20 px-4 py-2 rounded-full">
                Maybe they are hiding? 🕵️‍♂️
            </div>
        </div>
    );
};

export default ErrorView;
