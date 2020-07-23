import React, {useRef, createRef, useEffect, useState} from 'react';
import AppWrapper from './atoms/AppWrapper.js'
import Nav from './organisms/Nav.js'
import Home from './pages/Home.js'
import Travel from './pages/Travel.js'
import Living from './pages/Living.js'

const scrollToRef = (ref) => {
  console.log(ref);
  window.scrollTo(0, ref.current.offsetTop);
}

export default function App() {
  const homeRef = useRef();
  const travelRef = useRef();
  const livingRef = useRef();
  const [activePage, setActivePage] = useState(1);



  useEffect( () => {
    console.log('active page = ' + activePage )
  }, [activePage])


  return (
    <AppWrapper>    
      <Nav activePage={activePage} >
        <li className={activePage === 1 ? 'active' : ''} onClick={()=>{ scrollToRef(homeRef) }}>Home</li>
        <li className={activePage === 2 ? 'active' : ''} onClick={()=>{ scrollToRef(travelRef) }}>Travel</li>
        <li className={activePage === 3 ? 'active' : ''} onClick={()=>{ scrollToRef(livingRef) }}>Living</li>  
      </Nav>

      <Home ref={homeRef} setActivePage={setActivePage} activePage={activePage} /> 
      <Travel ref={travelRef} setActivePage={setActivePage}/>
      <Living ref={livingRef} setActivePage={setActivePage}/>

    </AppWrapper>
  );
}


