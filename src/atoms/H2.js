import React from 'react';
import styled from 'styled-components';

const Style = styled.h1`
    margin: auto; padding: 0;
    text-align: ${p => p.align ? p.align : 'center'};
    letter-spacing: ${p => p.linespace ? p.linespace : -2 + 'px'};
    font-size: 1.5rem;
    font-weight: 100;
    line-height: 3.1rem;
    width: 100%;
    user-select: none;
    margin-right: 0;
    color: ${p => p.color ? p.color : 'white'};

    @media only screen and (max-width: 600px) {
      text-align: center;
      font-size: 1rem;
      letter-spacing: 0.2 rem;
    }

`;

export default function H2(p) {
  return (
    <Style align={p.align} linespace={p.linespace} color={p.color}>
        {p.children}
    </Style>
  );
}