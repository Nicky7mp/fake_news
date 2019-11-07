import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

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
            <div className="searchBar">
                <div className="searchInput">
                    <input type="text" placeholder="Search"></input>
                </div>
                <div className="searchIcon">
                    <FaSearch />
                </div>
            </div>
        </div>

    );
}

export default NavBarTop 
