import React from "react";
import { Link } from 'react-router-dom';
import Cv from '../images/cv.pdf'

function Header(){
    return(
        <header>
            <nav>
                <a className="underline" href={ Cv }>about</a>
            </nav>
            <h1>
                <Link to={"./"}>0x22:$<span className="cursor">█</span></Link>
            </h1>
        </header>
    )
}

export default Header;