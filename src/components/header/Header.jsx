import React from 'react'
import './header.css'
import CTA from './CTA'
import CodeIntro from './CodeIntro'
import HeaderSocials from './Headersocials'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hola Soy</h5>
        <h1>Walter Yañez</h1>
        <h5 className="text-light">Desarrollador Web</h5>
        <CTA />
        <CodeIntro />
        <HeaderSocials/>

        <a href="#about" className='scroll__down' aria-label="Bajar">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>
    </header>
  )
}

export default Header