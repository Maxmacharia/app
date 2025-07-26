import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplashPage() {
  const [revealed, setRevealed] = useState(false);
  const navigate = useNavigate();

  const handleTap = () => {
    setRevealed(true);
  };

  const goToVideo = () => {
    navigate('/video');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-100 via-purple-100 to-blue-100 text-center relative overflow-hidden">
      {/* Floating emojis */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="animate-pulse text-pink-400 text-4xl absolute top-12 left-12">💖</div>
        <div className="animate-bounce text-purple-400 text-3xl absolute top-24 right-20">💘</div>
        <div className="animate-ping text-red-300 text-5xl absolute bottom-16 left-1/4">❤️</div>
        <div className="animate-bounce text-blue-300 text-3xl absolute bottom-24 right-1/3">💕</div>
      </div>

      {/* Main content */}
      <div className="z-10 p-6 max-w-md w-full">
        {!revealed ? (
          <button
            onClick={handleTap}
            className="text-3xl font-semibold text-pink-600 bg-white/80 backdrop-blur-md rounded-xl px-8 py-4 shadow-lg transition hover:scale-105"
          >
            💝 Tap to Reveal Birthday Message 💝
          </button>
        ) : (
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl">
            <h1 className="text-2xl font-bold text-pink-600 mb-4">Happy Birthday, My Love 💕</h1>
            <p className="text-gray-700 text-lg mb-6">
              You are the most beautiful part of my life. Every day I thank the universe for you. On this special day, I want you to feel all the love in the world. 💜💙💗
            </p>
            <button
              onClick={goToVideo}
              className="bg-pink-500 text-white px-6 py-2 rounded-full shadow hover:bg-pink-600 transition"
            >
              Continue to Surprise 🎁
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
