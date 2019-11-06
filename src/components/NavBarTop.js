import React from 'react'
import {Link} from 'react-router-dom'

const  NavBarTop = (props) => {
    return (
        <nav className="navBarTop">
            <ul>
                <img className="navBarLogo" src={props.img} alt="Fake-news logo"/>

                <li>
                    <Link to="/">News</Link>
                </li>

                <li>
                    <Link to="/opinion">Opinion</Link>
                </li>

                <li>
                    <Link to="/lifestyle">LifeStyle</Link>
                </li>

                <li>
                    <Link to="/culture">Culture</Link>
                </li>

                <li>
                    <Link to="/sport">Sport</Link>
                </li>

                <li>
                     <Link to="/search">Search</Link>
                </li>

                <li>
                     <Link to="/signin">Sign in</Link>
                </li>
            </ul>
        </nav>
        
    );
}

export default NavBarTop 
