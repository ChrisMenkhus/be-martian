import React, {useState, forwardRef, useRef, useEffect} from 'react';
import styled from 'styled-components';
import PageWrapper from '../atoms/PageWrapper.js'
import Colors from '../atoms/Colors.js'
import H2 from '../atoms/H2.js'

import { ReactComponent as OrbitsSvg } from '../svg/orbits.svg';


const OrbitsStyle = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 0;
  pointer-events: none;

  svg {
    height: 120%; width: 100%;
    margin-top: -5%;

    circle {
      stroke: white;
      stroke-width: 0.2px;
    }

    circle:nth-of-type(5) {
      stroke: ${Colors.accent};
      stroke-width: 0.35px;
      pointer-events: all;
      transition: all 0.5s;
      fill: ${Colors.accent};
      fill-opacity: 0;
      &:hover {
        fill-opacity: 1;
        
      }
    }

    circle:nth-of-type(4) {
      stroke: white;
      stroke-width: 0.25px;

      // stroke-dashoffset: 50;
      // stroke-dasharray: 50;
      // animation: draw 5s linear alternate infinite; 
    }

    circle:nth-of-type(6) {
      stroke: none;
      fill: white;


    }
  }


  @keyframes draw {
    100% {
      stroke-dashoffset: 0;
    }
  }
`

const Orbits = () => {
  return(
    <OrbitsStyle>
      <OrbitsSvg />
    </OrbitsStyle>
  )
}

const StateSwitcherStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  button {
    width: 20%;
    cursor: pointer;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;

    &:hover {
      color: ${Colors.accent};
    }
  }
  h2 {
    width: 100%;
  }
`

const StateSwitcher = (p) => {
  let options = p.options;
 
  const selectedOptionNumber = p.stateVar;
  const setSelectedOptionNumber = p.setStateVar;

  const FilterSelectedNumber = (num) => {
    setSelectedOptionNumber(
      selectedOptionNumber+num >= 0 ? selectedOptionNumber+num <= options.length-1 ? selectedOptionNumber+num : selectedOptionNumber : selectedOptionNumber
    )
  }
  return (
    <StateSwitcherStyle onClick={()=>console.log('fuckflck')}>
      <button onClick={()=>FilterSelectedNumber(-1)}>{'<'}</button>
        <H2 color={Colors.accent}>{options[selectedOptionNumber]}</H2>
      <button onClick={()=>FilterSelectedNumber(+1)}>{'>'}</button>
    </StateSwitcherStyle>
  )
}

const InfoBoxStyle = styled.div`
  width: 300px;
  height: 500px;
  margin-top: 10%;
  margin-left: 10%;
`;

const InfoBox = (p) => {
  return(
    <InfoBoxStyle>
    <H2>Target</H2>
    <StateSwitcher options={['Mars', 'Earth', 'Moon']} stateVar={p.stateVar} setStateVar={p.setStateVar}/>
    </InfoBoxStyle>
  )
}

const Travel = forwardRef((p, ref) =>
{
  const [selectedBody, setSelectedBody] = useState(0);

  return (
    <div ref={ref} className='notvisual'>
    <PageWrapper flexdirection='column' page={2} setActivePage={p.setActivePage} offset={-500}>
      <Orbits/>
      {/* <H1>About Page</H1> */}
      <InfoBox stateVar={selectedBody} setStateVar={setSelectedBody}/>
    </PageWrapper>
    </div>
  );
})


export default Travel;