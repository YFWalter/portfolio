import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/sh360.jpg'
import IMG2 from '../../assets/arcana.jpg'
import IMG3 from '../../assets/agenda.jpg'
import IMG4 from '../../assets/divigastos.jpg'
import IMG5 from '../../assets/whatsapp-sender.jpg'

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
  {
    id: 3,
    image: IMG3,
    title: 'MiAgenda',
    description: 'Sistema de turnos online hecho con Laravel. Los clientes eligen servicio, profesional y horario disponible, con roles de acceso (cliente, personal y administrador).',
    url: 'https://mediumseagreen-badger-164115.hostingersite.com/',
    urlLabel: 'Ver demo',
    github: 'https://github.com/YFWalter/agenda',
  },
  {
    id: 4,
    image: IMG4,
    title: 'DiviGastos',
    description: 'Sistema de gastos compartidos hecho con Laravel. Permite registrar compras en cuotas, dividirlas entre varias personas y llevar el seguimiento de los pagos mes a mes.',
    url: 'https://lightcoral-goose-780379.hostingersite.com/login',
    urlLabel: 'Ver demo',
    github: 'https://github.com/YFWalter/gastos-compartidos',
  },
  {
    id: 5,
    image: IMG5,
    title: 'WhatsApp Sender',
    description: 'API en Python para enviar mensajes de WhatsApp masivos a partir de una planilla de Excel, con control anti-bloqueo (delays y pausas) y reporte de estado de cada envío.',
    url: 'https://whatsapp-sender-kuctn9crr4umpac4pxbevo.streamlit.app/',
    urlLabel: 'Ver demo',
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
          data.map(({id, image, title, description, url, urlLabel, github}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-bar">
                  <span></span><span></span><span></span>
                </div>
                <div className="portfolio__item-image">
                  <img className='portfolio__image' src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                {description && <p className='portfolio__item-description'>{description}</p>}
                <div className="portfolio__item-cta">
                  {github && (
                    <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  )}
                  <a href={url} className='btn btn-primary' target='_blank' rel='noreferrer'>{urlLabel || 'Visitar sitio'}</a>
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
