import React from 'react'
import './about.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const skills = ['Laravel', 'PHP', 'JavaScript', 'React', 'Vue.js', 'MySQL', 'Tailwind', 'Git']

export const About = () => {
  return (
    <section id='about'>
      <h5>Conóceme</h5>
      <h2>Sobre Mi</h2>

      <div className="container about__container">
        <div className="about__content">
          <p>
            Hola, mi nombre es Walter Yañez y soy desarrollador web con más de 2 años de experiencia. Me especializo en el uso de Laravel para el desarrollo backend y en JavaScript para la creación de interfaces dinámicas, con conocimientos en frameworks como Vue.js y React. Me apasiona desarrollar soluciones eficientes y escalables, prestando atención a los detalles para crear proyectos bien diseñados y funcionales. Actualmente, sigo trabajando en proyectos personales para ampliar mis habilidades y mantenerme en constante aprendizaje. Te invito a visitar mi perfil en <a href="https://www.linkedin.com/in/walterya%C3%B1ez/" target="_blank" rel="noreferrer">LinkedIn</a>.
          </p>

          <div className="about__skills">
            <h4>Stack principal</h4>
            <div className="about__skills-list">
              {skills.map((skill) => (
                <article key={skill} className='about__skill'>
                  <BsPatchCheckFill className='about__skill-icon' />
                  <span>{skill}</span>
                </article>
              ))}
            </div>
          </div>

          <a href='#contact' className='btn btn-primary'>Escríbeme</a>
        </div>
      </div>
    </section>
  )

}

export default About