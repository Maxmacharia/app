import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function VideoPage() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const togglePlayback = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const goToNextPage = () => {
    navigate('/page2'); // change `/page2` to your actual next route
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 relative">
      {/* Floating Love Emojis */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="animate-pulse text-pink-400 text-3xl absolute top-10 left-10">💖</div>
        <div className="animate-bounce text-purple-400 text-2xl absolute top-20 right-20">💘</div>
        <div className="animate-ping text-red-300 text-4xl absolute bottom-10 left-1/3">❤️</div>
        <div className="animate-bounce text-blue-300 text-2xl absolute bottom-20 right-1/4">💕</div>
      </div>

      <div className="z-10 w-full max-w-md px-4 text-center">
        <video
          ref={videoRef}
          onClick={togglePlayback}
          className="rounded-2xl shadow-lg w-full mb-6 cursor-pointer"
          controls
        >
          <source src={`${import.meta.env.BASE_URL}video.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <button
          onClick={goToNextPage}
          className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-pink-600 transition"
        >
          Watched video? Tap here 💌
        </button>
      </div>
    </div>
  );
}
