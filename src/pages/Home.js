import React, {forwardRef, useEffect, useRef, createRef, useState} from 'react';
import styled from 'styled-components';
import PageWrapper from '../atoms/PageWrapper.js'
import Colors from '../atoms/Colors.js'
import DoubleHeader from '../molecules/DoubleHeader.js'
import { ReactComponent as RocketSvg } from '../svg/rocket.svg';


const RocketStyle = styled.div`
  position: relative;
  display: flex;
  height: 45vh;
  width: auto;
  pointer-events: none;
  margin: auto;
  margin-top: 0;
  transition: all 4s;

  svg {
    transition: all 2s;
    margin: auto;
    // margin-top: 30vh;
    height: 100%; width: auto;
    path {
      stroke: white;
      stroke-width: 0.15px;
      stroke-dashoffset: 220;
      stroke-dasharray: 220;
      animation: draw 6s forwards;
      animation-delay: 1.2s;
      stroke: white;
    }
    path:nth-of-type(4) {
      opacity: 0;
      stroke: ${Colors.accent2};
      stroke-dashoffset: 220;
      stroke-dasharray: 110;
      stroke-width: 0.5px;
      animation: fadein 2.2s forwards, draw 5s infinite;
      animation-delay: 2.2s;
    }
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fadein {
    to {
      opacity: 1;
    }
  }
`;

const Rocket = forwardRef((p, ref) => {
  return(
    <RocketStyle ref={ref}>
      <RocketSvg />
    </RocketStyle>
  )
})

const BoxStyle = styled.div`
  position: relative;
  margin: auto;
  padding: 1rem;
  height: 14rem;
  width: auto;
  background-color: ${Colors.primary};
  color: ${Colors.background};
  border: 1px solid black;
`;

const Box = (p) => {
  return(
    <BoxStyle>
      {p.children}
    </BoxStyle>
  )
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Home = forwardRef((p, ref) => 
{
  let rocketRef = useRef();
  let activePageRef = createRef();
  activePageRef.current = p.activePage;

  return (
    <div ref={ref} className='notvisual'>
    <PageWrapper bgcolor={Colors.primary} page={1} setActivePage={p.setActivePage} flexdirection='column'>
      <DoubleHeader lineone={'Be Human'} linetwo={'Become Martian'} accent={Colors.accent} mtop={'4rem'} mbot={'0'}/>

      <Rocket ref={rocketRef}
      className={p.activePage === 2 ? 'active2' : ''}
      />

    </PageWrapper>
    </div>
  );
}
)

export default Home;