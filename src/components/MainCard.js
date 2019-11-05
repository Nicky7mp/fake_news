import React from 'react'

const  MainCard = (props) => {
    return (
        <div className="mainCardBodyDiv">
            <img className="mainCardImg" src={props.img} alt=""/>
            <div className="title">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}


export default  MainCard 