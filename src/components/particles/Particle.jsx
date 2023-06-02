import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particlesConfig from '../../config/configParticles.json';

import React from 'react'
import './particle.css'

function Particle() {
    const particlesInit = async (main) => {

        console.log(main);

        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Particles
            className='particles'
            id='tsparticles'
            init={particlesInit}
            loaded={particlesLoaded}

            options=
            {particlesConfig}
            
        />
      );
    }

export default Particle