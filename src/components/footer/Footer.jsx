import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="footer__inner">
        <ul className='permalinks'>
          <li><a href='#header'>Inicio</a></li>
          <li><a href='#about'>Sobre mí</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contacto</a></li>
        </ul>

        <div className='footer__socials'>
          <a href="https://www.linkedin.com/in/walterya%C3%B1ez/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
          <a href="https://github.com/YFWalter" target="_blank" rel="noreferrer"><FaGithub/></a>
        </div>
      </div>

      <div className='footer__copyright'>
        <small>&copy; 2026 Walter Yañez · Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer
