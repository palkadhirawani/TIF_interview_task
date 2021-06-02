import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = () => {
    return (
        <Ring>
            <InnerRing></InnerRing>
            <InnerRing></InnerRing>
            <InnerRing></InnerRing>
            <InnerRing></InnerRing>
        </Ring>
    )
};

export default Loader;

const LoadingRing = keyframes `
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;
const Ring = styled.div `
    position: relative;
    width: 80px;
    height: 80px;
`;
const InnerRing = styled.div `
    box-sizing: border-box;
    position: absolute;
    width: 80px;
    height: 80px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: ${LoadingRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #BFBFBF transparent transparent transparent;
    
    &:nth-child(1) {
        animation-delay: -0.45s;
    }
    &:nth-child(2) {
        animation-delay: -0.3s;
    }
    &:nth-child(3) {
        animation-delay: -0.15s;
    }
`;

// import styled, { keyframes } from "styled-components";

// const rotate360 = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// export const Loader = ({children}) => {
//     return <Spinner>{children}</Spinner>
// }
// const Spinner = styled.div`
//   animation: ${rotate360} 1s linear infinite;
//   transform: translateZ(0);
  
//   border-top: 2px solid grey;
//   border-right: 2px solid grey;
//   border-bottom: 2px solid grey;
//   border-left: 4px solid black;
//   background: transparent;
//   width: 24px;
//   height: 24px;
//   border-radius: 50%;
// `;