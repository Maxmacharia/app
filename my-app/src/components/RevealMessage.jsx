// src/components/RevealMessage.jsx
import { useState } from 'react';
import video from '../assets/birthday-video.mp4';

export default function RevealMessage() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-romanticPink via-softPurple to-skyBlue relative overflow-hidden">
      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="bg-white px-8 py-4 rounded-full shadow-lg text-2xl font-semibold text-pink-600 hover:bg-pink-100 transition duration-300 animate-bounce"
        >
          Tap to Reveal 💌
        </button>
      ) : (
        <video
          className="rounded-2xl shadow-xl w-11/12 max-w-xl"
          src={video}
          controls
          autoPlay
        />
      )}

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute animate-float-emoji text-4xl">💖</div>
        <div className="absolute animate-float-emoji2 text-4xl left-1/4">💘</div>
        <div className="absolute animate-float-emoji3 text-4xl left-1/2">💞</div>
        <div className="absolute animate-float-emoji4 text-4xl left-3/4">💗</div>
      </div>
    </div>
  );
}
