import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './Headersocials'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hola Soy</h5>
        <h1>Walter Yañez</h1>
        <h5 className="text-light">Desarrollador Web</h5>
        <CTA />
        <HeaderSocials/>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header