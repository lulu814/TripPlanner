import React from "react";
import {FaCalendarPlus, FaWpforms} from 'react-icons/fa';
import {Link} from "react-router-dom";

export default function MenuTabs(){
    return(
        <nav className="nav nav-pills nav-justified">
            <Link className="nav-item nav-link pill-item"
               to="/plan-forum">
                <FaWpforms />
                    Plan Forums
            </Link>
            <Link className="nav-item nav-link pill-item"
               to="/plans"
               tabIndex="-1"
               aria-disabled="true">
                <FaCalendarPlus />
                Travel Plan</Link>
        </nav>
    )
}
