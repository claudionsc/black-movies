import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"

const Icon = styled.a`
    width: 50px;
    font-size: 1.5rem;

`

const Navbar = () => {
    return (
        <nav id="navbar">
            <div className="title">
                <h2><Link to="/">BlackMovies</Link></h2>
            </div>

            <Icon>
                <AiFillGithub />
            </Icon>
            <Icon>
                <AiFillLinkedin />
            </Icon>
        </nav>
    )
}

export default Navbar