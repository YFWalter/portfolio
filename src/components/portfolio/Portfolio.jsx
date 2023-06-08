import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/card-product.jpeg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Card Product',
    github:'https://github.com/YFWalter/cards-product.io',
    demo: 'https://yfwalter.github.io/cards-product.io/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mi trabajo reciente</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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