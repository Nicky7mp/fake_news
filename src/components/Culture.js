import React from 'react'

import Natalja from '../images/natalja.jpg'
import Telmo from '../images/Telmo.png'
import Hamza from '../images/Hamza.jpg'
import Pav from '../images/pav.jpg'
import Raisins from '../images/Raisins.jpeg'

import SmallCards from './SmallCards'
import MiddleCards from './MiddleCards'
import MainCard from './MainCard'
import AdCards from './AdCards'

export default function Culture() {
    return (
        <div>
            Culture pieces
            <div className="div">
            <MainCard img={Natalja} title="The question everyone is asking, Who's Sarah?" />
            </div>
            <div className="classOne">
            <MiddleCards img={Telmo} title="Portuguese man says 'Winner Winner Chicken Dinner' for the first time" subcategory="World" />
            <MiddleCards img={Hamza} title="Hamza missing classes due to advising Larry Page on running google more efficiently" subcategory="HyperTech" />
            </div>
            <div className="classTwo">
            <MiddleCards img={Pav} title="Polish man changes his name to 'Pepe le Pav'" subcategory="World" />
            <MiddleCards img={Raisins} title="Sneaky raisins finding there way into peoples food" subcategory="Wrong" />
            </div>
        </div>
    )
}
