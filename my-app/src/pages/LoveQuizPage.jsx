import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "What’s my favorite thing about you?",
    options: ["Your smile 😊", "Your voice 🎶", "Your mind 🧠", "Everything 💖"],
    correct: 3,
  },
  {
    question: "What color makes you shine?",
    options: ["Red", "Blue 💙", "Pink 💗", "Purple 💜"],
    correct: 1,
  },
  {
    question: "How do you feel when I talk to you?",
    options: ["Calm 😌", "Excited 🤩", "Loved 🥰", "All of the above 😍"],
    correct: 3,
  },
];

function LoveQuizPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (index) => {
    if (index === questions[current].correct) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const handleNext = () => {
    navigate("/gift");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-4 text-center">
      {!finished ? (
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full">
          <h2 className="text-xl font-bold mb-4 text-purple-700">{questions[current].question}</h2>
          <div className="grid gap-3">
            {questions[current].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="bg-purple-200 hover:bg-purple-300 text-purple-800 px-4 py-2 rounded-lg transition"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full">
          <h2 className="text-2xl font-bold mb-4 text-pink-600">🎉 You're amazing!</h2>
          <p className="mb-4 text-purple-700">You know me so well! 💞</p>
          <button
            onClick={handleNext}
            className="bg-blue-400 text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Unwrap your gift ❤️ 🎁
          </button>
        </div>
      )}
    </div>
  );
}

export default LoveQuizPage;
