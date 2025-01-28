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
        <div className="about__content">
          {/* <div className="about__cards">
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
          </div> */}

          <p>
            Hola, mi nombre es Walter Yañez y soy desarrollador web con más de 2 años de experiencia. Me especializo en el uso de Laravel para el desarrollo backend y en JavaScript para la creación de interfaces dinámicas, con conocimientos en frameworks como Vue.js y React. Me apasiona desarrollar soluciones eficientes y escalables, prestando atención a los detalles para crear proyectos bien diseñados y funcionales. Actualmente, sigo trabajando en proyectos personales para ampliar mis habilidades y mantenerme en constante aprendizaje. Te invito a visitar mi perfil en <a href="https://linkedin.com/in/walteryañez">LinkedIn</a>.
          </p>
          <a href='#contact' className='btn btn-primary'>Escribeme</a>
        </div>
      </div>
    </section>
  )

}

export default About