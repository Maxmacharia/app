import { useNavigate } from "react-router-dom";

function GiftPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-purple-700">
      <div className="text-2xl font-bold mb-4">
        🎁 Your gift is coming soon! 💖
      </div>
      <h2 className="text-xl font-semibold mb-2">Play a game to reveal your gift</h2>
      <button
        onClick={() => navigate("/heart-game")}
        className="bg-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-700 transition"
      >
        Play
      </button>
    </div>
  );
}

export default GiftPage;
