import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/sh360.jpg'
import IMG2 from '../../assets/arcana.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'SH 360 - Seguridad e Higiene',
    description: 'Sitio web institucional para una consultora de seguridad e higiene industrial. Diseño responsive, presentación de servicios y formulario de contacto.',
    url: 'https://sh360.solutions/',
    github: null,
  },
  {
    id: 2,
    image: IMG2,
    title: 'Arcana Studio',
    description: 'Sitio web para un estudio de diseño gráfico y branding. Desarrollado con Next.js, diseño elegante y responsive, con formulario de contacto.',
    url: 'https://arcanastudiobb.com/',
    github: null,
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mi trabajo reciente</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, url, github}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img className='portfolio__image' src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                {description && <p className='portfolio__item-description'>{description}</p>}
                <div className="portfolio__item-cta">
                  {github && (
                    <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  )}
                  <a href={url} className='btn btn-primary' target='_blank' rel='noreferrer'>Visitar sitio</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
