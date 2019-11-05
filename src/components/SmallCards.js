import React from 'react'

const SmallCards = (props) => {
    return (
        <div className="bodyDivSmallCards">

            <img className="smallCardsImg" src={props.img} alt=""/>

            <div className="titleSmallCards">
                <h1>{props.title}</h1>
            </div>

            <div className="subSmallCards">
                <h5>{props.subcategory}</h5>
            </div>

        </div>
    )
}


export default SmallCards