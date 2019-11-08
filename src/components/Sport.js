import React from 'react'

import Jacob from '../images/Jacobmanswins.jpeg'
import Maarja from '../images/Maarja.jpg'
import Arsenal from '../images/Arsenal.jpg'
import Chess from '../images/chess.jpg'

import MainCard from './MainCard'
import MiddleCards from './MiddleCards'

export default function Sport() {
    return (
        <div>
            Sport pieces
            <div className="div">
            <MainCard img={Jacob} title="Man finally wins his first Ping-Pong match against a 3 year old" subcategory="Not really a sport" />
            </div>
            <div className="classOne">
            <MiddleCards img={Maarja} title="Woman breaks mans arm in thumb war." subcategory="The Hulkess" />
            <MiddleCards img={Arsenal} title="Arsenal lose AGAIN!" subcategory="Sports" />
            </div>
            <MiddleCards img={Chess} title="Violence breaks out at chess tournament. Nails broken!" />
        </div>
    )
}
