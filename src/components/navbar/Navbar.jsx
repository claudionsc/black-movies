import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaCrown } from "react-icons/fa"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const Icon = styled.a`
    width: 50px;
    font-size: 1.5rem;

`

const Navbar = () => {
    return (
        <nav id="navbar">
            <div className="title">
                <Link to="/"><h2>BlackMovies</h2></Link><a><FaCrown /></a>
            </div>

            <Icon>
                <a href="https://github.com/claudionsc" rel="noreferrer" target="_blank">
                    <AiFillGithub />
                </a>
            </Icon>

            <Icon>
                <a href="https://www.linkedin.com/in/claudionsc/" rel="noreferrer" target="_blank" className="navbar-logo link">
                    <AiFillLinkedin />
                </a>
            </Icon>
        </nav>
    )
}

export default Navbar