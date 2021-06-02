import React, {useState} from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from '../images/logo.svg';
import {Button} from '../components/StyledComponents';

const Navbar = () => {

    const[showLinks, setShowLinks] = useState(false);

    return (
        <StyledNavbar>
            <LeftSide>
                <Logo fill="#35323E"/>
                <NavList hidden={(showLinks ? 'hidden' : '')}>
                    <NavLinks>Features</NavLinks>
                    <NavLinks>Pricing</NavLinks>
                    <NavLinks>Resources</NavLinks>
                    <HR />
                </NavList>
            </LeftSide>
            <RightSide>
                <ButtonWrapper hidden={(showLinks ? 'hidden' : '')}>
                    <NavLinks>Login</NavLinks>
                    <Button bg rounded full>Sign Up</Button>
                </ButtonWrapper>
            </RightSide>
            <div onClick={() => {setShowLinks(!showLinks); console.log(showLinks);}}>
                <Hamburger />
                <Hamburger />
                <Hamburger />
            </div>
        </StyledNavbar>
    );
}

export default Navbar;

const StyledNavbar = styled.nav `
    max-width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    padding: 1rem 8vw 0 8vw;
    position: relative;
`;
const LeftSide = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const RightSide = styled.div `
    list-style: none;

    @media screen and (min-width: 376px) {
        width: 40%;
        position: relative;
        height: 40px;
    }
`;
const ButtonWrapper = styled.div `
    @media screen and (min-width: 376px) {
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
    }

    @media screen and (max-width: 375px) {
        display: ${({hidden}) => (hidden ? 'flex' : 'none')};
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #3B3054;
        position: absolute;
        top: 275px;
        left: 8vw;;
        right:8vw;
        padding: 1rem 2rem 2rem;
        border-radius: 0 0 10px 10px;
    }
`;

const NavList = styled.ul `
    list-style: none;
    display: flex;
    justify-content: space-around;
    
    @media screen and (max-width: 375px) {
        display: ${({hidden}) => (hidden ? 'flex' : 'none')};
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        background-color: #3B3054;
        position: absolute;
        top: 70px;
        left: 8vw;
        right: 8vw;
        margin: 0 auto;
        border-radius: 10px 10px 0 0;
    }
`;
const NavLinks = styled.li `
    margin-right: 1.5rem;
    color: #9E9AA7;
    font-weight: 700;
    &:hover {
        cursor: pointer;
        color: #35323E;
    }

    @media screen and (max-width: 375px) {
        margin-right: 0;
        color: #fff;
        margin-bottom: 1.5rem;
    }
`;
const HR = styled.div `
    height: 0.5px;
    width: 100%;
    background-color: #9E9AA7;
    margin: 0.3rem;
    z-index: 10;
`;
const Hamburger = styled.div `
    width: 22px;
    height: 3px;
    margin-bottom: 5px;
    background-color: #9E9AA7;
    display: none;

    @media screen and (max-width: 375px) {
        display: flex;
    }
`;