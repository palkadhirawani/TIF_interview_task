/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';

const AddLink = () => {

    const [linkHistory, setLinkHistory] = useState([{
        original: '',
        new: '',
    }]);
    const [link, setLink] = useState();

    const [search, setSearch] = useState('');
    // const [query, setQuery] = useState(''); 
    
    // useEffect(() => {
    //     getLink();
    // }, [query]);
    
    const getLink = async () => {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${search}`); 
        const data = await response.json();
        setLink(data.result);
        console.log(data.result.original_link);
        if(data.result) {
            setLinkHistory([...linkHistory, {original: link.original_link, new: link.short_link}]);
        }
    }

    const searchedItem = event => {
        setSearch(event.target.value);
        console.log(search);
    }

    // const getSearch = event => {
    //     event.preventDefault(); 
    //     setQuery(search);
    //     // setSearch('');
    // }

    console.log(linkHistory);

    return (
        <>
            <div>
                <form onSubmit={getLink}>
                    <input type="text" value={search} onChange={searchedItem} placeholder="Shorten a link here..."></input>
                </form>
                <button onClick={getLink}>Shorten It!</button>
                <div>
                {linkHistory.map((lin) => (
                    <div>{lin.original}
                        <span>{lin.new}
                            <button>Copy</button>
                        </span>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}

export default AddLink;