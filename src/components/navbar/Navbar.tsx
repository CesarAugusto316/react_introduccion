import { FC } from 'react';
import { FaBars, FaFontAwesomeFlag } from 'react-icons/fa';
import './navbar.css';


export const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <FaBars className="navbar__icon" />
      <h1 className="navbar__heading">LarnU Courses</h1>
      <FaFontAwesomeFlag className="navbar__icon" />
    </nav>
  );
};
