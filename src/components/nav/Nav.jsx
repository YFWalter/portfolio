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