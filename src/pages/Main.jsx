import React from 'react';
import AnimateText from '../components/AnimateText';
import me from '../images/me.png'


function Main() {
   
    return (
        <div>
            <section className="card">
            <img className="u-photo centered" width="250" src={me} alt="Mert I. Aydogan"/>
            <AnimateText/>
            <ul>
                <li>
                <a className="u-url" rel="me" href="https://github.com/ioanaydgn">Github</a>
                </li>

                <li>
                <a className="u-url" rel="me" href="https://gitlab.com/ioan34">Gitlab</a>
                </li>

                <li>
                <a className="u-email" rel="me" href="mailto:mertaydogn0+site@gmail.com">Mail</a>
                </li>
                <li>
                <a
                    className="u-key"
                    rel="me"
                    href="oops.html"
                    >8B80 E673 9B08 79B0 0A4A  EB7E 0941 09D0 83C8 8FF7</a>
                </li>
            </ul>
            <div align="center">
                <a href="https://www.linkedin.com/in/mert-aydogan-b359311b9/"><button>
                
                <span></span> linkedin <span></span><span></span><span></span>
            </button></a></div>
            </section>
        </div>
    );
}

export default Main;
