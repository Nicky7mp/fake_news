import React from 'react'

const Footer = (props) => {
    return (
        <div className="footerMainDiv">
            <img className="footerLogo" src={props.img} alt="Fake-news logo" />

            <div className="rights">
                <h6>All rights reserved. © 2019 FakeNews Publications Ltd.</h6>
            </div>

            <div className="cookie">
                <h6>Cookie Settings</h6>
            </div>

            <div className="terms">
                <h6>Terms and Conditions</h6>
            </div>

            <div className="privacy">
                <h6>Privacy policy</h6>
            </div>

        </div>
    )
}

export default Footer



// import React from 'react'
// import './Footer.css'
// const Footer = (props) => {
//    return (
//        <div className="footerMainDiv">
//            <img className="footerLogo" src={props.img} alt="Fake-news logo" />
//            <div className="rights">
//                <h6>All rights reserved. © 2019 FakeNews Publications Ltd.</h6>
//            </div>
//            <div className="cookie">
//                <h6>Cookie Settings</h6>
//            </div>
//            <div className="terms">
//                <h6>Terms and Conditions</h6>
//            </div>
//            <div className="privacy">
//                <h6>Privacy policy</h6>
//            </div>
//        </div>
//    )
//    }
// export default Footer