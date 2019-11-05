import React from 'react'

export default AdCards = (props) => {
    return (
        <div className="adCardsImage">
            <img className="adImage" src={props.img} alt="ad image"/>
        </div>
    )
}
