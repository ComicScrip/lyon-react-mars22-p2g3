import { Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import Contact from '../routes/Contact';
import About from '../routes/About';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}
