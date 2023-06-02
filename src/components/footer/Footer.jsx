import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiNetlify} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>GUALI</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>Sobre mi</a></li>
        <li><a href='#experience'>Experiencia</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='conta'>Contacto</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://linkedin.com/in/walteryañez" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/YFWalter" target="_blank"><FaGithub/></a>
        {/* <a href="https://linkedin.com/in/walteryañez" target="_blank"><SiNetlify/></a> */}
      </div>

      <div className='footer__copyright'>
        <small>&copy; Guali.Todos los derechos reservados.</small>
      </div>
    </footer>

)}

export default Footer