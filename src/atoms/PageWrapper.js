import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import Colors from '../atoms/Colors.js'

import starsimg from '../img/stars.jpg'

const Style = styled.div`
    height: 100%;
    background-color: ${p => p.bgcolor ? p.bgcolor : Colors.background};
    display: flex;
    scroll-snap-align: start;
    scroll-snap-margin: 100%;
    flex-direction: ${p => p.flexdirection ? p.flexdirection : 'row'};
    padding-top: ${p => p.top ? p.top : 0};

    // padding-bottom: 6rem;


    // background-image: url(${p => p.bgcolor ? null : starsimg});
    background-size: cover;

`;

export default function PageWrapper(p) {
  let ref = useRef();
  let offset = p.offset ? p.offset : 0;
  let initialPageHeight = 0;

  const CheckIfInBounds = (ref) => {
    if (window.pageYOffset + window.screenY / 2 >= ref.current.offsetTop + offset && window.pageYOffset  < ref.current.offsetTop + initialPageHeight) {
      p.setActivePage(p.page)
    }
  }

  useEffect( () => {
    initialPageHeight = ref.current.getBoundingClientRect().height + offset;
  }, [ref])

  useEffect( () => {
    window.addEventListener("scroll", () => { CheckIfInBounds(ref) })
    return () => window.removeEventListener("scroll", () => {  })
  }, );

  return (
    <Style ref={ref} bgcolor={p.bgcolor} flexdirection={p.flexdirection} top={p.top}>
      {/* <div className='animebg'>
      </div> */}
        {p.children}
    </Style>
  );
}

