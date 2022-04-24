import { Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import Details from '../routes/Details';
import Quizz from '../routes/Quizz';
import About from '../routes/About';
import MoviePicker from '../routes/MoviePicker';
import '../Css/App.css';
import DisplayMovie from './DisplayMovie';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/details" element={<Details />} />
        <Route path="/components/DisplayMovie" element={<DisplayMovie />} />
        <Route path="/quizz" element={<Quizz />} />
        <Route path="/moviepicker" element={<MoviePicker />} />
      </Routes>
    </main>
  );
}
