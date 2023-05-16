import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn'> Descargar CV </a>
        <a href="#contact" className='btn btn-primary'> Escribirme </a>
    </div>
  )
}

export default CTA