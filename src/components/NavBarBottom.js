import React from 'react'

import { FaFacebookSquare } from 'react-icons/io'


//Do we need LINK??? or should we use <a>
import { Link } from 'react-router-dom'

const NavBarBottom = () => {
    return (
        <nav className="navBarBottom">
            <div className="essentialsDiv">
                <h4 className="essentials">Essentials</h4>
                <ul className="essensialsText">
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

                </ul>

            </div>

            <div className="usefulDiv">
                <h4 className="usefulLinks">Useful links</h4>
                <ul className="usefulText">

                    <li>
                        <Link to="/contactus">Contact Us</Link>
                    </li>

                    <li>
                        <Link to="/about">About</Link>
                    </li>

                    <li>
                        <Link to="/advertise">Advertise</Link>
                    </li>

                    <li>
                        <Link to="/subscribe">Subscribe to Fake News</Link>
                    </li>

                    <li>
                        <Link to="/competitions">Fake News competitions</Link>
                    </li>

                    <li>
                        <Link to="/archive">Archive</Link>
                    </li>
                </ul>
            </div>

            <div className="followDiv">
                <h4 className="followus">Follow Us on</h4>
                <h5 className="facebook"> <FaFacebookSquare /> </h5>
                <h5 className="twitter"> <FaTwitterSquare /> </h5>
                <h5 className="instagram"> <FaInstagram /> </h5>
            </div>


        </nav>
    )
}


export default NavBarBottom 