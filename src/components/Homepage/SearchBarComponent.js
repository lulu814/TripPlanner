import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchBar() {
    return(
        <div className='search-section'>
            <div id="cover">
                <form method="get" action="">
                    <div className="tb">
                        <div className="td"><input type="text" placeholder="Where to?" required/></div>
                        <div className="td" id="s-cover">
                            <button type="submit" className="search-button">
                                <div id="s-circle"></div>
                                <span className="search-span-stick"></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
