import { useState } from 'react';

export default function Navbar() {

  const [showMenu, setShowMenu] = useState(false);
  const menuClassName = showMenu ? 'navbar active' : 'navbar';
  const handleMenu = () => setShowMenu(!showMenu);

  return (
    <header>
      <nav className="menu">
        <a href="/" className="logo-container">
          <div className='logo'></div>
        </a>
        <ul className={menuClassName}>
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#servicios">Nuestros servicios</a>
          </li>
          <li>
            <a href="#">Crear Podcast</a>
          </li>
        </ul>
        <div onClick={handleMenu} className='menu-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </div>
      </nav>
    </header>
  )
}