import React, {forwardRef, useRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import scrollHelper from '../atoms/scrollHelper.js'
import Colors from '../atoms/Colors.js'


const Style = styled.nav`
    width: 100%;
    height: auto;
    left: 0;
    position: ${p => p.sticky ? 'fixed' : 'absolute'};
    top: ${p => p.sticky ? '0vh' : '90vh'};
    padding-top: 2rem;
    opacity: 0;
    animation: fadein 3s forwards;
    animation-delay: 3s;
    z-index: 1;

    opacity: 1;

    ul {
      position: relative;
      width: 100%;
      display: flex;
      margin: 0;
      padding: 0;
    }
    li {
      text-align: center;
        list-style-type: none;
        display: inline;
        margin: auto;
        text-transform: uppercase;
        letter-spacing: 0.5rem;
        font-size: 0.8rem;
        cursor: pointer;
        user-select: none;
        width: fit-content;
        text-indent: 0.4rem;


        transition: all 0.5s;
        &:hover {
          font-size: 1.5rem;
          color: ${Colors.accent};
        }

        color: ${p => p.active ? Colors.accent : 'white'};
    }

    .active {
      color: ${Colors.accent};
      // background-color: ${Colors.accent2};
      border-bottom: 4px solid ${Colors.accent};
    }



    @media only screen and (max-width: 600px) {
      display: none;
      position: absolute;
      top: 70vh;
      ul {
        flex-direction: column;
      }
      li {
        width: 100%;
        margin-top: 4vh;
        display: block;
        font-size: 0.8rem;
      }
    }


    @keyframes fadein {
      to {
        opacity: 1;
      }
    }
`;

const Nav = (p) => {
  const navRef = useRef();
  const [lockNav, setLockNav] = useState(false);
  let initialNavOffset = 0;

  useEffect( () => {
    initialNavOffset = navRef.current.offsetTop;
  }, [navRef])

  const lockNavRules = () => {
    initialNavOffset = navRef.current.offsetTop > initialNavOffset ? navRef.current.offsetTop : initialNavOffset;
    setLockNav(scrollHelper(navRef, 10, initialNavOffset).shouldstick);
  }

  useEffect( () => {
    window.addEventListener("scroll", () => { lockNavRules() })
    return () => window.removeEventListener("scroll", () => { lockNavRules() })
  }, );

  return (
    <Style ref={navRef} sticky={lockNav}>
        <ul>
          {p.children}
        </ul>
    </Style>
  );
} 

export default Nav;


