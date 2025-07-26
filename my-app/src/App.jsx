import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import VideoPage from './pages/VideoPage';
import Page2 from './pages/Page2'; // placeholder for next page
import LoveQuizPage from './pages/LoveQuizPage';
import HeartGamePage from "./pages/HeartGamePage";
import GiftPage from "./pages/GiftPage";
import GiftPage2 from "./pages/GiftPage2";
import RealGiftPage from "./pages/RealGiftPage";

function App() {
  return (
    <Router basename="/app">
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/quiz" element={<LoveQuizPage />} />
        <Route path="/heart-game" element={<HeartGamePage />} />
        <Route path="/gift" element={<GiftPage />} />
        <Route path="/gift-2" element={<GiftPage2 />} />
        <Route path="/real-gift" element={<RealGiftPage />} />
      </Routes>
    </Router>
  );
}

export default App;
