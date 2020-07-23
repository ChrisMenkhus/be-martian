import React from 'react';
import styled from 'styled-components';
import Colors from '../atoms/Colors.js'

const Style = styled.div`
    height: 100vh;

    &:before {
      content: '';
      position: absolute;
      background-color: ${Colors.background};

      height: 100%;
      width: 100%;

      transform: scaleY(.8);
      animation: skewBg 2.8s forwards;
      animation-delay: 1.2s;
      pointer-events: none;

     
    }

    @keyframes skewBg {
      0% {
        transform: scaleY(.8);
      }
      100% {
        transform: scaleY(1);
      }
    }

    .notvisual {
      height: 100%;
      width: auto;
      // pointer-events: none;
      // display: none;
    }
`;

export default function AppWrapper(props) {
  return (
    <Style>
        {props.children}
    </Style>
  );
}