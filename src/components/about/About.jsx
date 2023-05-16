import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
    <section id='about'>
      <h5>Conóceme</h5>
      <h2>Sobre Mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="sobre mi"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Años Trabajando</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>+200</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Proyects</h5>
              <small>80 Completados</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eos natus impedit iure ab. Explicabo ipsa incidunt veniam soluta voluptates. Unde praesentium laboriosam repudiandae sequi, maxime incidunt illo aut eveniet?
          </p>
          <a href='#contact' className='btn btn-primary'>Escribeme</a>
        </div>
      </div>
    </section>
  )

}

export default About