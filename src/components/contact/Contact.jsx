import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef, useState} from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm('service_9pcj48s', 'template_43xt58c', form.current, 'uFGuD_BsRk9SwMtrb')
      .then(() => {
          setStatus('success');
          e.target.reset();
      }, (error) => {
          console.error(error.text);
          setStatus('error');
      });
  };
  return (
    <section id='contact'>
      <h5>Ponerse en contacto</h5>
      <h2>Contáctame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>yanez.walt@gmail.com</h5>
            <a href='mailto:yanez.walt@gmail.com'>Enviar Mensaje</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+54 9 291 4702712</h5>
            <a href='https://api.whatsapp.com/send?phone=2914702712' target='_blank' rel='noreferrer'>Enviar Mensaje</a>
          </article>
        </div>
        {/** END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='> nombre completo' required />
          <input type="email" name='email' placeholder='> correo electrónico' required />
          <textarea name="message" rows="7" placeholder='> escribí tu mensaje...' required></textarea>
          <button type='submit' className='btn btn-primary' disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
          </button>

          {status === 'success' && (
            <p className='contact__message contact__message--success'>
              ¡Mensaje enviado! Te responderé a la brevedad.
            </p>
          )}
          {status === 'error' && (
            <p className='contact__message contact__message--error'>
              Hubo un error al enviar el mensaje. Probá de nuevo o escribime por email.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
