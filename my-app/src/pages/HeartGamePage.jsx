import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NUM_HEARTS = 15;

function getRandomPosition() {
  return {
    top: Math.random() * 85 + "vh",
    left: Math.random() * 85 + "vw",
    fontSize: Math.random() * 20 + 20 + "px",
    animationDuration: Math.random() * 3 + 2 + "s",
  };
}

export default function HeartGamePage() {
  const [hearts, setHearts] = useState([]);
  const [popped, setPopped] = useState(0);
  const [loveMessage, setLoveMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initialHearts = Array.from({ length: NUM_HEARTS }, (_, i) => ({
      id: i,
      ...getRandomPosition(),
      popped: false,
    }));
    setHearts(initialHearts);
  }, []);

  const popHeart = (id, e) => {
    const { clientX, clientY } = e;
    setHearts((prev) =>
      prev.map((heart) =>
        heart.id === id ? { ...heart, popped: true } : heart
      )
    );
    setPopped((prev) => prev + 1);

    // Show love message
    setLoveMessage({
      x: clientX,
      y: clientY,
      id: Date.now(),
    });

    setTimeout(() => setLoveMessage(null), 1500);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-pink-50">
      <h2 className="text-center text-pink-700 font-bold text-2xl pt-6">
        Pop/Tap the {NUM_HEARTS} hearts 💕 on the screen baby 🥰
      </h2>

      {/* Hearts */}
      {hearts.map((heart) =>
        !heart.popped ? (
          <div
            key={heart.id}
            className="absolute cursor-pointer animate-float z-10"
            style={{
              top: heart.top,
              left: heart.left,
              fontSize: heart.fontSize,
              animationDuration: heart.animationDuration,
            }}
            onClick={(e) => popHeart(heart.id, e)}
          >
            💖
          </div>
        ) : null
      )}

      {/* Floating I love you message */}
      {loveMessage && (
        <div
          className="absolute text-pink-600 text-xl font-semibold animate-fade-out z-20"
          style={{
            top: loveMessage.y - 30 + "px",
            left: loveMessage.x - 40 + "px",
          }}
        >
          I love you 💖
        </div>
      )}

      {/* Button to gift-2 */}
      {popped >= NUM_HEARTS && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
          <button
            onClick={() => navigate("/gift-2")}
            className="bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300"
          >
            🎁 Now unwrap your gift
          </button>
        </div>
      )}
    </div>
  );
}
