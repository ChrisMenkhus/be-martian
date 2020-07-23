import React from 'react';
import styled from 'styled-components';

const Style = styled.h1`
    
    margin: auto; padding: 0;
    text-align: ${p => p.align ? p.align : 'center'};
    letter-spacing: ${p => p.linespace ? p.linespace : 'auto'};
    font-size: 1.5rem;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 2.1rem;
    width: 100%;
    // user-select: none;
    margin-right: 0;

    

    background: linear-gradient(to right, ${p => p.color ? p.color : 'white'} 50%, ${p => p.color2 ? p.color2 : 'white'} 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    opacity: ${p => p.fadein ? '0' : '1'};
    opacity: 0;
    animation: fadein 2.5s forwards;
    animation-delay: ${p => p.fadein ? '3s' : '0s'};


    @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    @media only screen and (max-width: 600px) {
      text-align: center;
      font-size: 1rem;
      letter-spacing: 0.2 rem;
    }

`;

export default function H1(p) {
  return (
    <Style align={p.align} linespace={p.linespace} color={p.color} color2={p.color2} fadein={p.fadein}>
        {p.children}
    </Style>
  );
}