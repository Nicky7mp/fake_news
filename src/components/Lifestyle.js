import React from 'react'

import Schools from '../images/w3.jpeg'
import Jacobgc from '../images/jacobgeeclarke.jpeg'
import MacSmack from '../images/macsmack.jpg'
import Vicky from '../images/vicky.jpg'
import Train from '../images/train.jpg'
import Spicy from '../images/spicyfood.png'
import Blinded from '../images/blinded.jpg'

import MiddleCards from './MiddleCards'
import MainCard from './MainCard'

export default function Lifestyle() {
    return (
        <div>
            Lifestyle pieces
            <div className="div">
            <MainCard img={Jacobgc} title="Dean devasted as he loses in-work boyfriend to Jacob G Clarke" subcategory="Guylove" />
            </div>
            <div className="classOne">
            <MiddleCards img={Schools} title="W3 Schools is officially better than MDN, says Jacob" subcategory="Truth" />
            <MiddleCards img={MacSmack} title="Smack the Mac day so popular, Apple are having to work overtime to make more" subcategory="Tech" />
            </div>
            <div className="classTwo">
            <MiddleCards img={Vicky} title="Keen Greenfingered lady sets fire to all plants in garden centre in mad ZenGarden rage" subcategory="Vegetarians" />
            <MiddleCards img={Train} title="Man retires after earning 1m in delayed train fares in 3 months" subcategory="Money" />
            </div>
            <div className="classThree">
            <MiddleCards img={Spicy} title="Woman makes soup so spicy that she has to down a litre of yoghurt a minute" subcategory="Food" />
            <MiddleCards img={Blinded} title="Maarja blinds the editor of fake news by making her look at bright lights" subcategory="Torture" />
            </div>
        </div>
    )
}
