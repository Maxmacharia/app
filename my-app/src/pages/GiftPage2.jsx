import React from "react";
import { useNavigate } from "react-router-dom";

function GiftPage() {
  const navigate = useNavigate();

  const handleUnwrapClick = () => {
    navigate("/real-gift");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-center px-6">
      <h1 className="text-4xl text-purple-700 font-extrabold mb-4 animate-pulse">
        💝 You Are My Greatest Gift 💝
      </h1>

      <p className="text-xl text-purple-800 max-w-xl mb-6 leading-relaxed">
        Every click, every pop, every page... was a piece of my heart I wanted to share with you.
        <br /><br />
        You’ve made my world brighter, my dreams deeper, and my love stronger.
        <br /><br />
        I may not have wrapped roses or a diamond ring in this website, but I’ve wrapped my heart in every word, every pixel, and every moment.
        <br /><br />
        Happy birthday my love 🎂🥳 <br />
        I love you so much  💘
      </p>

      <p className="text-3xl text-pink-600 font-bold animate-bounce mt-4 mb-8">
        🎁 Forever Yours
      </p>

      <button
        onClick={handleUnwrapClick}
        className="px-6 py-3 bg-red-500 text-white text-lg rounded-full shadow-lg hover:bg-red-600 transition-all"
      >
        🎁 Unwrap your real gift
      </button>
    </div>
  );
}

export default GiftPage;

