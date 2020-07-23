import React from 'react';
import styled from 'styled-components';
import Colors from '../atoms/Colors.js'
import H1 from '../atoms/H1.js'

const Style = styled.div`
    width: fit-content;
    margin: auto;
    margin-top: ${p => p.mtop ? p.mtop : '0'};
    margin-bottom: ${p => p.mbot ? p.mbot : 'auto'};
    z-index: 1;

    @media only screen and (max-width: 600px) {
      width: 100%;
    }


    display: flex;
    flex-direction: column;

    
    &:before {
      position: relative;
      content: '';
      width: 0%;
      height: 1.5rem;
      background-color: ${Colors.background};
      top: 1.8rem;
      opacity: 1;
      margin-left: auto;

      animation: textanim 3.4s cubic-bezier(.74, .06, .4, .92) forwards;
    }
    &:after {
      position: relative;
      content: '';
      width: 0%;
      height: 1.5rem;
      background-color: ${Colors.background};
      bottom: 1.8rem;
      opacity: 1;
      animation: textanim 3.4s cubic-bezier(.74, .06, .4, .92) forwards;
      animation-delay: 2s;
    }


    @keyframes textanim {
      0% {
        width: 100%;
      }
      49% {
        width: 50%;
        background-color: ${Colors.background};
      }
      55% {
        // background-color: ${Colors.accent};
      }
      60% {
        // background-color: ${Colors.accent};
        width: 50%;
      }
      100% {
        background-color: ${Colors.accent};

        width: 0%;
      }
    }

    @media only screen and (max-width: 600px) {
      margin-top: 3rem;
    }
    
`;

export default function DoubleHeader(p) {
  return (
    <Style mtop={p.mtop} mbot={p.mbot}>
        <H1 className='strike' align='right' linespace={'0.65rem'} color2={p.accent}>{p.lineone}</H1>
        <H1 linespace='0.3rem' color={p.accent} fadein={true}>{p.linetwo}</H1>
    </Style>
  );
}