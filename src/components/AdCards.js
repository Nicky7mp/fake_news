import React from 'react'

const AdCards = (props) => {
    return (
        <div className="adCardsImage">
            <img className="adImage" src={props.img} alt="ad image"/>
        </div>
    )
}

export default AdCards