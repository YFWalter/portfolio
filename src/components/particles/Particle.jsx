import React from 'react'
import './particle.css'

// Fondo "aurora": gradientes difuminados que se desplazan suavemente,
// con una grilla de puntos tenue. Liviano (solo CSS), ideal para tema oscuro.
function Particle() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora__blob aurora__blob--1" />
      <div className="aurora__blob aurora__blob--2" />
      <div className="aurora__blob aurora__blob--3" />
      <div className="aurora__grid" />
    </div>
  )
}

export default Particle
