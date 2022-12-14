import React from 'react'
import { Link } from 'react-router-dom';
//import {} from '../down';

function Down() {
  return (
    <div>
        <section className="card">
            <ul>
                <li>
                    <a className="u-url" rel="1" href="down/python">Python</a>
                </li>
                <li>
                    <a className="u-url" rel="2" href="down/c">C</a>
                </li>
                <li>
                    <a className="u-url" rel="3" href="down/swiftui">SwiftUI</a>
                </li>
                <li>
                    <a className="u-url" rel="4" href="down/c++">Assembly</a>
                </li>
            </ul>
        </section>
    </div>
  )
}

export default Down;