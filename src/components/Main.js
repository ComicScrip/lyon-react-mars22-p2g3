import { Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import Quizz from '../routes/Quizz';
import About from '../routes/About';
import Result from '../routes/Result';
import '../Css/App.css';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/result" element={<Result />} />
        <Route path="/quizz" element={<Quizz />} />
      </Routes>
    </main>
  );
}
