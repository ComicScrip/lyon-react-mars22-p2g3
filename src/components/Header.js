import { NavLink } from 'react-router-dom';

const getActiveLinkStyle = ({ isActive }) => ({
  color: isActive ? '#FFF027' : 'white',
});

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/" style={getActiveLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/quizz" style={getActiveLinkStyle}>
          Movie Picker
        </NavLink>
        <NavLink to="/about" style={getActiveLinkStyle}>
          About Us
        </NavLink>
      </nav>
    </header>
  );
}
