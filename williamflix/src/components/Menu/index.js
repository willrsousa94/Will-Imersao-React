import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/LogoMain.png';
import './menu.css';
import Button from '../Button'
// import ButtonLink from './components/ButtonLink';


function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="AluraFlix Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;