/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import {Button} from './StyledComponents';
import bgShortenDesktop from '../images/bg-shorten-desktop.svg';
import bgShortenMobile from '../images/bg-shorten-mobile.svg';
import Loader from '../components/Loader';

const AddLink = () => {

    const width = window.innerWidth;
    let shortenurl;

    if(width>=375) {
        shortenurl = bgShortenDesktop;
    }
    else {
        shortenurl = bgShortenMobile;
    }

    const [linkHistory, setLinkHistory] = useState([]);
    const [copy, setCopy] = useState([]);

    useEffect(()=> {
        console.log("hi");
        let content=[];
        linkHistory.map((history, index) => {
            content[index] = {
                link: 'Copy',
                isCopied: false,
            }
            console.log(history);
            return null;
        })
        console.log(content);
        setCopy(content);
    },[linkHistory]);

    useEffect(() => {
        console.log(copy);
    },[copy]);

    const [search, setSearch] = useState('');
    
    const [emptyLink, setEmptyLink] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const getLink = async (e) => {
        e.preventDefault()
        setLoading(true);
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${search}`); 
        const data = await response.json();
        if(data.result) {
            console.log(data.result.original_link);
            setLinkHistory([...linkHistory, {original: data.result.original_link, new: data.result.short_link}]);
            setLoading(false);
        }
        if(search === '') {
            setEmptyLink(true);
        }
        else {
            setEmptyLink(false);
        }
    }

    const searchedItem = event => {
        setSearch(event.target.value);
        console.log(search);
    }

    console.log(linkHistory);

    // const [copyLink, setCopyLink] = useState('Copy');
    // const [copySuccess, setCopySuccess] = useState(false);

    const newLinkRef = useRef(null);

    function copyToClipboard(e, index) {
        e.preventDefault()
        newLinkRef.current.select();
        document.execCommand('copy');
        // setCopyLink('Copied!');
        // setCopySuccess(true);
        setCopy((c) => {
            let temp = [...c];
            temp[index] = {
                link: 'Copied!',
                isCopied: true,
            }
            return temp;
        })
        console.log("copied");
    };

    return (
        <>
            <div>
                <StyledForm onSubmit={getLink}>
                    <BgShorten alt="boost bg" src={shortenurl}/>
                    <InputWrapper>
                        <StyledInput error={(emptyLink ? 'error' : '')} type="text" value={search} onChange={searchedItem} placeholder="Shorten a link here..."></StyledInput>
                        <Button bg full onClick={getLink}>Shorten It!</Button>
                    </InputWrapper>
                    <ErrorMessage error={(emptyLink ? 'error' : '')}>Please add a link</ErrorMessage>
                </StyledForm>
                {loading && search!=='' ? (
                <div style={{margin: '4rem calc(50% - 40px)'}}>
                    <Loader />
                </div>
                ) : (
                <div>
                    {linkHistory.map((link, index) => {
                        return (
                        <OutputWrapper key={index}>
                            <div style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{link.original}</div>
                            <NewLinkWrapper>
                                <HR />
                                <NewLink ref={newLinkRef} rows="1" readOnly>{link.new}</NewLink>
                                {copy[index] && <CopyButton onClick={(e) => copyToClipboard(e,index)} copied={(copy[index]['isCopied'] ? 'copied' : '')}><small>{copy[index]['link']}</small></CopyButton>}
                            </NewLinkWrapper>
                        </OutputWrapper>)
                    })}
                </div>)}
            </div>
        </>
    );
}

export default AddLink;

const StyledForm = styled.form `
    background-color: #3b3054;
    height: 110px;
    position: relative;
    border-radius: 5px;
    padding: 0 3rem;

    @media screen and (max-width: 375px) {
        height: 140px;
        padding: 0 1.2rem;
    }
`;
const BgShorten = styled.img `
    position: absolute;
    top: 0;
    left: 0;
    height: 110px;
    width: 100%;
    border-radius: 5px;
`;
const InputWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 110px;

    @media screen and (max-width: 375px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 140px
    }
`;
const ErrorMessage = styled.div `
    display: ${({error}) => (error ? 'flex' : 'none')};
    color: #F46262;
    font-style: italic;
    font-size: 10px;
    z-index: 100;
    position: absolute;
    top: 80px;

    @media screen and (max-width: 375px) {
        top: 62px;
    }
`;
const StyledInput = styled.input `
    border: none;
    z-index: 2;
    width: 75%;
    height: 2.2rem;
    border-radius: 5px;
    border: ${({error}) => (error ? '2px solid #f46262' : 'none')};
    padding-left: 1rem;    
    ::placeholder {
        font-family: 'Poppins', sans-serif;
        color: #9E9AA7;
    }

    @media screen and (max-width: 375px) {
        margin-bottom: 1.5rem;
        width: 93%;
    }
`;
const OutputWrapper = styled.div `
    margin: 1rem 0;
    padding: 0.7rem 1rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    font-size: 16px;

    @media screen and (max-width: 375px) {
        display: flex;
        flex-direction: column;
        align-items: start;
        font-size: 14px;
        padding: 0.7rem 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
const HR = styled.div `
    height: 1px;
    width: 115%;
    background-color: #EFF1F7;
    margin: 0.8rem 0 0.3rem 0;
    z-index: 10;
`;
const NewLinkWrapper = styled.div `
    display: flex;
    align-items: center;

    @media screen and (max-width: 375px) {
        display: flex; 
        flex-direction: column;
        width: 100%;
    }
`;
const NewLink = styled.textarea `
    color: #2acfcf;
    border: none;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    resize: none;
    &:focus {
        border: none;
    }

    @media screen and (max-width: 375px) {
        width: 100%;
        margin: 0.5rem 0;
    }
`;
const CopyButton = styled.button `
    background-color: ${({copied}) => (copied ? '#3B3054' : '#2acfcf')};
    border: none;
    border-radius: 5px;
    padding: 5px 20px;
    color: #fff;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    z-index: 10;
    &:hover {
        background-color: #9BE0E0;
        cursor: pointer;
    }
    &:active {
        background-color: #3B3054;
    }

    @media screen and (max-width: 375px) {
        width: 100%;
    }
`