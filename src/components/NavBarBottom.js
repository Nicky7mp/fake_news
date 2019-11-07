import React from 'react'
import { Link } from 'react-router-dom'

import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

//Do we need LINK??? or should we use <a>


const NavBarBottom = () => {
    return (
        <div className="navBarBottom">
            <div className="essentialsDiv">
                <h4 className="essentials">Essentials</h4>
                <ul className="essensialsText">
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

                </ul>

            </div>

            <div className="usefulDiv">
                <h4 className="usefulLinks">Useful links</h4>
                <ul className="usefulText">

                    <li>
                        <Link className="a" to="/contactus">Contact Us</Link>
                    </li>

                    <li>
                        <Link className="a" to="/about">About</Link>
                    </li>

                    <li>
                        <Link className="a" to="/advertise">Advertise</Link>
                    </li>

                    <li>
                        <Link className="a" to="/subscribe">Subscribe to Fake News</Link>
                    </li>

                    <li>
                        <Link className="a" to="/competitions">Fake News competitions</Link>
                    </li>

                    <li>
                        <Link className="a" to="/archive">Archive</Link>
                    </li>
                </ul>
            </div>

            <div className="followDiv">
                <h4 className="followus">Follow Us on</h4>
                <div className="icons">
                <h5 className="facebook"> <FaFacebookSquare /> </h5>
                <h5 className="twitter"> <FaTwitterSquare /> </h5>
                <h5 className="instagram"> <FaInstagram /> </h5>
                </div>
            </div>


        </div>
    )
}


export default NavBarBottom 