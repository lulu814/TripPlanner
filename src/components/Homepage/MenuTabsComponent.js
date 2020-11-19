import React from "react";
import { FaPencilAlt, FaCalendarPlus } from 'react-icons/fa';

export default function MenuTabs(){
    return(
        <nav className="nav nav-pills nav-justified">
            <a className="nav-item nav-link pill-item" href="/">
                <i className="fas fa-search-location"></i>
                Search places
            </a> 
            <a className="nav-item nav-link pill-item"
               href="/posts/details">
                <i className="fab fa-wpforms"></i>
                    Travel Forums
            </a>  
            <a className="nav-item nav-link pill-item" href="/posts"><FaPencilAlt />Write a post</a>
            <a className="nav-item nav-link pill-item"
               href="/plans"
               tabIndex="-1"
               aria-disabled="true">
                <FaCalendarPlus />
                Travel Plan</a>
        </nav>
    )
}
