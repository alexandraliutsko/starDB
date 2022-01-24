import React from "react";

import './header.css';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <Link to="/starDB/">Star DB</Link>
            </h3>

            <ul className="d-flex">
                <li>
                    <Link to="/starDB/people/">People</Link>
                </li>
                <li>
                    <Link to="/starDB/planets/">Planets</Link>
                </li>
                <li>
                    <Link to="/starDB/starships/">Starships</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
