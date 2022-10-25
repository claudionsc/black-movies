import React from "react";
import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"

const Navbar = () => {
    return (
        <nav id="navbar">
            <div className="title">
                <h2><Link to="/">BlackMovies</Link></h2>
            </div>
            <form>
                <input style={{marginRight: '5px'}} type='text'placeholder="Busque um filme" />
                <button className="btn" type='submit'><BiSearchAlt2 /></button>
            </form>
        </nav>
    )
}

export default Navbar