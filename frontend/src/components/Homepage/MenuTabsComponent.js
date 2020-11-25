import React from "react";
import { FaPencilAlt, FaCalendarPlus, FaWpforms, FaSearchLocation } from 'react-icons/fa';

export default function MenuTabs(){
    return(
        <nav className="nav nav-pills nav-justified">
            <a className="nav-item nav-link pill-item" href="/">
                <FaSearchLocation/>
                Search places
            </a> 
            <a className="nav-item nav-link pill-item"
               href="/posts/details">
                <FaWpforms />
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
