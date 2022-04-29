import { Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import Details from '../routes/Details';
import About from '../routes/About';
import MoviePicker from '../routes/MoviePicker';
import Quote from '../routes/Quote';
import '../Css/App.css';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/moviepicker" element={<MoviePicker />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </main>
  );
}
