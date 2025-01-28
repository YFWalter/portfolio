import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/portfolio.jpg'
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
          <div className="me-image">
            <img src={ME} alt="sobre mi"className="portfolio__image"/>
          </div>
        </div>
        

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header