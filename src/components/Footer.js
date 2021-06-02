import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from '../images/logo.svg';
import {ReactComponent as Facebook} from '../images/icon-facebook.svg';
import {ReactComponent as Twitter} from '../images/icon-twitter.svg';
import {ReactComponent as Pinterest} from '../images/icon-pinterest.svg';
import {ReactComponent as Instagram} from '../images/icon-instagram.svg';

const Footer = () => {
    return (
        <FooterWrapper>
            <LogoWrapper>
                <Logo fill='#fff'/>
            </LogoWrapper>
            <List>
                <ListHeading>Features</ListHeading>
                <ListElement>Link Shortening</ListElement>
                <ListElement>Branded Links</ListElement>
                <ListElement>Analytics</ListElement>
            </List>
            <List>
                <ListHeading>Resources</ListHeading>
                <ListElement>Blog</ListElement>
                <ListElement>Developers</ListElement>
                <ListElement>Support</ListElement>
            </List>
            <List>
                <ListHeading>Company</ListHeading>
                <ListElement>About</ListElement>
                <ListElement>Our Team</ListElement>
                <ListElement>Careers</ListElement>
                <ListElement>Contact</ListElement>
            </List>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <ImageContainer><SVGFacebook /></ImageContainer>
                <ImageContainer><SVGTwitter /></ImageContainer>
                <ImageContainer><SVGPinterest /></ImageContainer>
                <ImageContainer><SVGInstagram /></ImageContainer>
            </div>
        </FooterWrapper>
    );
}

export default Footer;

const FooterWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    background-color: #232127;
    padding: 3rem 8vw;

    @media screen and (max-width: 375px) {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
`;
const LogoWrapper = styled.div `
    width: 25%;

    @media screen and (max-width: 375px) {
        width: 100%;
    }
`;
const List = styled.div `
    list-style: none;

    @media screen and (max-width: 375px) {
        margin: 2rem;
    }
`;
const ListHeading = styled.div `
    color: #fff;
    margin-bottom: 1rem;
    font-weight: 700;
`
const ListElement = styled.li `
    color: #9E9AA7;
    margin: 0.5rem 0; 
    &:hover {
        color: #2ACFCF;
        cursor: pointer;
    }
`;
const ImageContainer = styled.div `
    margin: 0 1rem;
`;
const SVGFacebook = styled(Facebook) `
    fill: #fff;
    &:hover {
        fill: #2ACFCF;
        cursor: pointer;
    }
`;
const SVGTwitter = styled(Twitter) `
    fill: #fff;
    &:hover {
        fill: #2ACFCF;
        cursor: pointer;
    }
`;
const SVGPinterest = styled(Pinterest) `
    fill: #fff;
    &:hover {
        fill: #2ACFCF;
        cursor: pointer;
    }
`;
const SVGInstagram = styled(Instagram) `
    fill: #fff;
    &:hover {
        fill: #2ACFCF;
        cursor: pointer;
    }
`;