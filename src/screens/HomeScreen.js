import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AddLink from '../components/AddLink';
import {Button, Heading, Text} from '../components/StyledComponents';
import styled from 'styled-components';
import illustration from '../images/illustration-working.svg';
import brandRecognition from '../images/icon-brand-recognition.svg';
import detailedRecords from '../images/icon-detailed-records.svg';
import fullyCustomizable from '../images/icon-fully-customizable.svg';
import bgBoostDesktop from '../images/bg-boost-desktop.svg';
import bgBoostMobile from '../images/bg-boost-mobile.svg';

const HomeScreen = () => {

    const width = window.innerWidth;
    let bgurl;

    if(width>=375) {
        bgurl = bgBoostDesktop;
    }
    else {
        bgurl = bgBoostMobile;
    }

    return (
        <MainWrapper>
            <Navbar />
            <Wrapper>
                <Container>
                    <MainText>More than just shorter links</MainText>
                    <Text>Build your brand's recognition and get detailed insights on how your links are performing.</Text>
                    <Button rounded bg>Get Started</Button>
                </Container>
                <ImageContainer>
                    <img alt="working illustration" src={illustration} style={{height: '70vh'}}/>
                </ImageContainer>
            </Wrapper>
            <GrayWrapper>
                <div style={{transform: 'translateY(-50px)', marginBottom: '3rem'}}>
                    <AddLink />
                </div>
                <Heading>Advanced Statistics</Heading>
                <TextContainer>
                    <Text centre>Track how your links are performing across the web with our advanced statistics dashboard.</Text>
                </TextContainer>
                <CardWrapper>
                    <GreenLine />
                    <Card1>
                        <IconContainer><img alt="brand recognition" src={brandRecognition}/></IconContainer>
                        <h3 style={{color: '#35323E'}}>Brand Recognition</h3>
                        <Text>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</Text>
                    </Card1>
                    <Card2>
                        <IconContainer><img alt="detailed records" src={detailedRecords}/></IconContainer>
                        <h3 style={{color: '#35323E'}}>Detailed Records</h3>
                        <Text>Gain insight into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</Text>
                    </Card2>
                    <Card3>
                        <IconContainer><img alt="fully customizable" src={fullyCustomizable}/></IconContainer>
                        <h3 style={{color: '#35323E'}}>Fully Customizable</h3>
                        <Text>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</Text>
                    </Card3>
                </CardWrapper>
            </GrayWrapper>
            <DarkWrapper>
                <BgBoost alt="boost bg" src={bgurl}/>
                <Heading bg>Boost your links today</Heading>
                <Button rounded bg>Get Started</Button>
            </DarkWrapper>
            <Footer />
        </MainWrapper>
    )
}

export default HomeScreen;

const MainWrapper = styled.div `
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
`;
const Wrapper = styled.div `
    max-width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 8vw;
    margin-top: -70px;

    @media screen and (min-width: 376px) {
        min-height: 100vh;
        max-height: 100vh;
    }

    @media screen and (max-width: 375px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        margin: 2rem 0 5rem 0;
    }
`;
const Container = styled.div `
    margin-right: 7rem;

    @media screen and (max-width: 375px) {
        margin: 2rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const MainText = styled.h1 `
    font-size: 4rem;
    line-height: 5rem;
    letter-spacing: 0px;
    margin-bottom: 0.4rem;
    margin-top: 0;
    color: #35323E;

    @media screen and (max-width: 375px) {
        font-size: 2.2rem;
        text-align: center;
        line-height: 2.8rem;
    }
`;
const ImageContainer = styled.div `
    margin-right: -210px;
    height: 70vh;
`;
const GrayWrapper = styled.div `
    background-color: rgba(191,191,191,0.2);
    padding: 8vw;
    padding-top: 0;

    @media screen and (max-width: 375px) {
        padding-bottom: 8rem;
    }
`;
const CardWrapper = styled.div `
    display: flex;
    justify-content: center;
    position: relative;

    @media screen and (max-width: 375px) {
        display: flex;
        flex-direction: column;
    }
`;
const GreenLine = styled.div `
    height: 10px;
    width: 80%;
    background-color: #2ACFCF;
    position: absolute;
    top: 30vh;

    @media screen and (max-width: 375px) {
        height: 80%;
        width: 3%;
        left: 50%;
        right: 50%;
    }
`;
const TextContainer = styled.div `
    width: 50vw;
    margin: -1.5rem auto 5rem auto;

    @media screen and (max-width: 375px) {
        width: 80vw;
        margin-top: 0;
    }
`;
const Card1 = styled.div `
    background-color: #fff;
    border-radius: 5px;
    margin: 1rem;
    padding: 2.5rem 2rem 0 2rem;
    position: relative;

    @media screen and (max-width: 375px) {
        margin: 1rem 0 2.5rem;
        text-align: center;
        padding: 2.5rem 1.5rem 0;
    }
`;
const Card2 = styled(Card1) `
    transform: translateY(10%); 
`;
const Card3 = styled(Card1) `
    transform: translateY(20%);
`;
const IconContainer = styled.div `
    background-color: #3b3054;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -2.4rem;

    @media screen and (max-width: 375px) {
        left: 40%;
        right: 60%;
    }
`;
const DarkWrapper = styled.div `
    background-color: #3b3054;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
`;
const BgBoost = styled.img `
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`;