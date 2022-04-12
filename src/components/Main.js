import { Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import Contact from '../routes/Contact';
import Details from '../routes/Details';
import About from '../routes/About';
import '../Css/App.css';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </main>
  );
}
