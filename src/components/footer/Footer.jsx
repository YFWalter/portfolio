import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#header' className='footer__logo'>GUALI</a>

      <ul className='permalinks'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>Sobre mi</a></li>
        <li><a href='#experience'>Experiencia</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contacto</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/walterya%C3%B1ez/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/YFWalter" target="_blank" rel="noreferrer"><FaGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Guali.Todos los derechos reservados.</small>
      </div>
    </footer>

)}

export default Footer