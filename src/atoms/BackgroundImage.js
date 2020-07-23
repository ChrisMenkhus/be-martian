import React, {useState} from 'react';
import styled from 'styled-components';
import Colors from '../atoms/Colors.js'

const Style = styled.div`
    position: relative;
    height: 80%;
    width: 80%;
    background-image: url(${p => p.src ? p.src : null});
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    margin: auto;
    border: 0.2px solid white;

    margin-top: ${p => p.mtop ? p.mtop : 'auto'};
    margin-bottom: ${p => p.mbot ? p.mbot : 'auto'};
    z-index: 0;

    display: flex; flex-direction: row;

    button {
        width: 10%;
        height: 100%;
        cursor: pointer;
        border: none;
        color: white;
        font-size: 2rem;

        background: rgb(255,255,255);
        background: linear-gradient(-90deg, rgba(255,255,255,0) -50%, rgba(255,255,255,0.17924264432335435) 100%);

        opacity: 0.25;
        &:hover {
          opacity: 1;
        }     
    }
    .right {
        background: rgb(255,255,255);
        background: linear-gradient(90deg, rgba(255,255,255,0) -50%, rgba(255,255,255,0.17924264432335435) 100%);
        margin-left: auto;
    }


    @media only screen and (max-width: 600px) {
      width: 100%;
      border-left: none;
      border-right: none;     
    }
`;


export default function BackgroundImage(p) {
    let options = p.options;

    const [selectedOptionNumber, setSelectedOptionNumber] = useState(0);

    const FilterSelectedNumber = (num) => {
        setSelectedOptionNumber(
          selectedOptionNumber+num >= 0 ? selectedOptionNumber+num <= options.length-1 ? selectedOptionNumber+num : selectedOptionNumber : selectedOptionNumber
        )
      }

    return (
        <Style src={options[selectedOptionNumber]} mtop={p.mtop} mbot={p.mbot}>
            {p.children}
            <button className='left' onClick={()=>{FilterSelectedNumber(-1)}} />
            <button className='right' onClick={()=>{FilterSelectedNumber(+1)}} />
        </Style>
    );
}