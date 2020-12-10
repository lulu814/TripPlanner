import React, {useState} from "react";
import { useHistory } from "react-router";

export default function SearchBar({updateText}) {
    const [searchText, setSearchText] = useState('');

    const history = useHistory();
    const updateSearchText = (text) => {
        console.log(`setting address to: ${text}`);
        history.push(`/search/${text}`);
    }

    return(
        <div className='search-section'>
            <div id="cover">
                <div className="tb search-tb">
                    <div className="td search-td">
                        <input 
                            value={searchText}
                            onInput={e => setSearchText(e.target.value)}
                            className="combo-input combo-searchbox" 
                            type="text" 
                            placeholder=" Where to?" 
                            required/>
                    </div>
                    <div className="td search-td" id="s-cover">
                        <button type="submit" className="search-button" onClick={event => updateSearchText(searchText)}>
                            <div id="s-circle"></div>
                            <span className="search-span-stick"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}