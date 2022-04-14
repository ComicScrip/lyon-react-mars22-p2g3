import { Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import MoviePicker from '../routes/Movie-Picker';
import '../Css/App.css';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie-picker" element={<MoviePicker />} />
      </Routes>
    </main>
  );
}
