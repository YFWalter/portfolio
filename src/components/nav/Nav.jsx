import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillFolder} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState, useEffect} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scrollspy: marca como activa la sección que está en el centro de la pantalla
  useEffect(() => {
    const sections = [
      { id: 'header', key: '#' },
      { id: 'about', key: '#about' },
      { id: 'portfolio', key: '#portfolio' },
      { id: 'contact', key: '#contact' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.id === entry.target.id);
            if (match) setActiveNav(match.key);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={visible ? 'nav--visible' : 'nav--hidden'}>
      <a href="#header"
      onClick={() => setActiveNav('#')}
      className={activeNav === '#' ? 'active' : ''}>
      <AiOutlineHome/></a>
      <a href="#about" 
      onClick={() => setActiveNav('#about')}
      className={activeNav === '#about' ? 'active' : ''}
      ><AiOutlineUser/></a>
      <a href="#portfolio"
      onClick={() => setActiveNav('#portfolio')}
      className={activeNav === '#portfolio' ? 'active' : ''}>
      <AiFillFolder/></a>
      <a href="#contact"
      onClick={() => setActiveNav('#contact')}
      className={activeNav === '#contact' ? 'active' : ''}>
      <BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav