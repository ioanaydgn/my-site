import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    const year = new Date().getFullYear();
    return(
        <footer>
            &copy; Copyright {year} - ioanaydgn.
            <br/>
            <Link to={"./"}>←</Link>
            &nbsp;-&nbsp;
            <Link to={"./down"}>→</Link>
        </footer>
    )
}

export default Footer;