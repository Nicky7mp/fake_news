import React from 'react'

import Nicky from '../images/Nicky.JPG'
import Quagmire from '../images/giggity.jpg'
import Jon from '../images/jon.jpg'
import Telmo from '../images/Telmo.png'
import Pigs from '../images/pigs.jpg'
import Pineapple from '../images/pineapple.jpg'

import MainCard from './MainCard'
import MiddleCards from './MiddleCards'

export default function Opinion() {
    return (
        <div>
            Opinion pieces
            <MainCard img={Nicky} title="Nicky is now 18 weeks into course and still can't code" subcategory="Numbnuts" />
            <MiddleCards img={Quagmire} title="How much Giggity is too much Giggity?" subcategory="Filth" />
            <MiddleCards img={Jon} title="Turing was a motherf***ing bad ass, claims man to his bosses" subcategory="Unapologetically Jon" />
            <MiddleCards img={Telmo} title="'Add a little bit of zoom so you can see', Now favourite all-time quote of the turing class" subcategory="World" />
            <MiddleCards img={Pineapple} title="Pineapple does not belong on a pizza no matter what Maarja says"  subcategory="Food" />
            <MiddleCards img={Pigs} title="Unpopular opinion reveals pigs in blankets aint all that.." subcategory="Unpopular Opinons" />
        </div>
    )
}
