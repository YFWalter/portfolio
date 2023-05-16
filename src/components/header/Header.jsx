import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './Headersocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola Soy</h5>
        <h1>Walter Yañez</h1>
        <h5 className="text-light">Desarrollador Web</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me"></img>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header