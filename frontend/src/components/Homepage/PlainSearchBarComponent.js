import React, {useState} from "react";

export default function SearchBar({updateText}) {
    const [searchText, setSearchText] = useState('');

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
                            placeholder="Where to?" 
                            required/>
                    </div>
                    <div className="td search-td" id="s-cover">
                        <button type="submit" className="search-button" onClick={event => updateText(searchText)}>
                            <div id="s-circle"></div>
                            <span className="search-span-stick"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}