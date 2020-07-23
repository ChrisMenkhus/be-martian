import React, {forwardRef} from 'react';
import styled from 'styled-components';
import PageWrapper from '../atoms/PageWrapper.js'
import Colors from '../atoms/Colors.js'
import H1 from '../atoms/H1.js'
import { ReactComponent as Planetandtreesvg } from '../svg/planetandtree.svg';
import starsImg from '../img/stars.jpg'
import starsImg2 from '../img/stars2.jpg'
import starsImg3 from '../img/stars3.jpg'

import BackgroundImage from '../atoms/BackgroundImage.js'

const PlanetStyle = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 0;
  pointer-events: none;

  svg {
    height: 100%; width: 100%;
    pointer-events: none;

    path {
      stroke: white;
      stroke-width: 0.2px;
      
      
    }

    path:nth-of-type(1) {
      // stroke-width: 0.3px;
      // stroke ${Colors.accent}
      stroke: white;
    }

    path:nth-of-type(2) {
      stroke-dashoffset: 240;
      stroke-dasharray: 240;
      animation: draw 5s alternate infinite; 


    }
  }

  @keyframes draw {
    100% {
      stroke-dashoffset: 0;
    }
  }
`

const Planet = () => {
  return(
    <PlanetStyle>
      <Planetandtreesvg />
    </PlanetStyle>
  )
}

const Living = forwardRef((p, ref) => {
  return (
    <div ref={ref} className='notvisual'>
    <PageWrapper bgcolor={Colors.background} page={3} setActivePage={p.setActivePage} offset={-500}>
      <BackgroundImage options={[starsImg, starsImg2, starsImg3]} mtop='auto' mbot='auto' />
      <Planet/>
    </PageWrapper>
    </div>
  );
})

export default Living;