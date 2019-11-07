import React from 'react'

const SmallCards = (props) => {
    return (
        <div className="bodyDivSmallCards">

            <img className="smallCardsImg" src={props.img} alt="" />

            <div className="textSmallCards">

                <div className="titleSmallCards">
                    <h1>{props.title}</h1>
                </div>

                <div className="subSmallCards">
                    <h6>{props.subcategory}</h6>
                </div>
            </div>

        </div>
    )
}

export default SmallCards