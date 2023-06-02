import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiNetlify} from 'react-icons/si'

const Headersociales = () => {
  return (
      <div className='header__socials'>
        <a href="https://linkedin.com/in/walteryañez" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/YFWalter" target="_blank"><FaGithub/></a>
        {/* <a href="https://linkedin.com/in/walteryañez" target="_blank"><SiNetlify/></a> */}
      </div>
      )
}

export default Headersociales