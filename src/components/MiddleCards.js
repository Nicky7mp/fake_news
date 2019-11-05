import React from 'react'

export default MiddleCards = (props) => {
    return (
        <div className="bodyDivMiddleCards">

        <img className="middleCardsImg" src={props.img} alt=""/>

        <div className="titleMiddleCards">
            <h1>{props.title}</h1>
        </div>

        <div className="subMiddleCards">
            <h5>{props.subcategory}</h5>
        </div>

    </div>
    )
}
