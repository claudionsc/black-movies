import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi"

const Navbar = () => {
    return (
        <nav id="navbar">
            <div className="title">
                <h2><Link to="/">BlackMovies</Link></h2>
            </div>
        </nav>
    )
}

export default Navbar