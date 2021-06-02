import React from 'react';
import styled, {css} from 'styled-components';

export const Button = ({rounded, bg, full, children}) => {
    return <StyledButton rounded={rounded} bg={bg} full={full}>{children}</StyledButton>;
};
const StyledButton = styled.button `
    background-color: ${({bg}) => (bg ? '#2acfcf' : '#fff')};
    color: ${({bg}) => (bg ? '#fff' : '#9e9aa7')};
    border: none;
    border-radius: ${({rounded}) => (rounded ? '30px' : '5px')};
    padding: 7px 28px;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    z-index: 1000;
    &:hover {
        filter: brightness(115%) sepia(30%);
        cursor: pointer;
    }
    @media screen and (max-width: 375px) {
        ${({ full }) =>
            full && css `
                width: 100%;
            `
        }
    }
`;

export const Heading = ({bg, children}) => {
    return <StyledHeading bg={bg}>{children}</StyledHeading>
}
const StyledHeading = styled.h2 `
    color: ${({bg}) => (bg ? '#fff' : '#35323E')};
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    margin-top: 0;
    z-index: 100;

    @media screen and (max-width: 375px) {
        font-size: 1.6rem;
    }
`;

export const Text = ({card, centre, children}) => {
    return <StyledText card={card} centre={centre}>{children}</StyledText>
}
const StyledText = styled.div `
    color: ${({card}) => (card ? '#bfbfbf' : '#9e9aa7')};
    font-size: 18px;
    margin-bottom: 2.5rem;
    text-align: ${({centre}) => (centre ? 'center' : 'left')};

    @media screen and (max-width: 375px) {
        text-align: center;
    }
`;