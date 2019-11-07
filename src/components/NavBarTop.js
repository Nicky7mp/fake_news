import React from 'react'
import { Link } from 'react-router-dom'

const NavBarTop = (props) => {
    return (
        <div className="navBarTop">
            <div className="logo">
                <img className="navBarLogo" src={props.img} alt="Fake-news logo" />
            </div>
            <div className="links">
                <ul>
                    <li>
                        <Link className="a" to="/">News</Link>
                    </li>

                    <li>
                        <Link className="a" to="/opinion">Opinion</Link>
                    </li>

                    <li>
                        <Link className="a" to="/lifestyle">LifeStyle</Link>
                    </li>

                    <li>
                        <Link className="a" to="/culture">Culture</Link>
                    </li>

                    <li>
                        <Link className="a" to="/sport">Sport</Link>
                    </li>

                    {/* <li>
                        <Link to="/search">Search</Link>
                    </li>

                    <li>
                        <Link to="/signin">Sign in</Link>
                    </li> */}
                </ul>
            </div>
        </div>

    );
}

export default NavBarTop 
