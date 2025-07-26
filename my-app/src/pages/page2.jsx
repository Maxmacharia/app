import { useNavigate } from "react-router-dom";

export default function Page2() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-2xl text-center max-w-md">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Dear Love ❤️</h2>
        <p className="text-purple-800 text-lg mb-6">
          Every moment with you is magic. Your smile brightens my darkest days, and your voice soothes my soul. You are everything I never knew I needed. 💫
        </p>
        <p className="text-purple-700 italic mb-6">I’m so lucky to have you in my life.</p>
        <button
          onClick={handleNext}
          className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition"
        >
          Next 💌
        </button>
      </div>
    </div>
  );
}
