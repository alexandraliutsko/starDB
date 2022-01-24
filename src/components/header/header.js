import React from "react";

import './header.css';

import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <Link to="/starDB/">Star DB</Link>
            </h3>

            <ul className="d-flex">
                <li>
                    <NavLink to="/starDB/people/">People</NavLink>
                </li>
                <li>
                    <NavLink to="/starDB/planets/">Planets</NavLink>
                </li>
                <li>
                    <NavLink to="/starDB/starships/">Starships</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Header;
