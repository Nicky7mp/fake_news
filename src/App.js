import React from 'react';
import './App.css';
import Jacobgc from './images/jacobgeeclarke.jpeg'
import Jacob from './images/Jacobmanswins.jpeg'
import Natalja from './images/natalja.jpg'
import Pav from './images/pav.jpg'
import Pav2 from './images/pav2.jpg'
import Vicky from './images/vicky.jpg'
import Maarja from './images/Maarja.jpg'
import Train from './images/train.jpg'
import Arsenal from './images/Arsenal.jpg'
import Telmo from './images/Telmo.png'
import Blinded from './images/blinded.jpg'
import MacSmack from './images/macsmack.jpg'
import Pigs from './images/pigs.jpg'
import Pineapple from './images/pineapple.jpg'
import Schools from './images/w3.jpeg'
import Raisins from './images/Raisins.jpeg'


function App() {
  return (
    <div className="App">
    <MiddleCards img={Jacob} title="Man finally wins his first Ping-Pong match against a 3 year old" subcategory="Not really a sport"></MiddleCards>
    <MiddleCards img={Jacobgc} title="Dean devasted as he loses in-work boyfriend to Jacob G Clarke" subcategory="Guylove"></MiddleCards>
    <MiddleCards img={Vicky} title="Keen Greenfingered lady sets fire to all plants in garden centre in mad ZenGarden rage" subcategory="Vegetarians"></MiddleCards>
    <MainCard img={Natalja} title="The question everyone is asking, Who's Sarah?"></MainCard>
    <SmallCards img={Maarja} title="Woman breaks mans arm in thumb war." subcategory="The Hulkess"></SmallCards>
    <SmallCards img={Train} title="Man retires after earning 1m in delayed train fares in 3 months" subcategory="Money"></SmallCards>
    <SmallCards img={Arsenal} title="Arsenal lose AGAIN!" subcategory="Sports"></SmallCards>
    <SmallCards img={Pav} title="Polish man changes his name to 'Pepe le Pav'" subcategory="World"></SmallCards>
    <SmallCards img={Raisins} title="Sneaky raisins finding there way into peoples food" subcategory="wrong"></SmallCards>
    <SmallCards img={Pineapple} title="Pineapple does not belong on a pizza no matter what Maarja says"  subcategory="Food"></SmallCards>
    <SmallCards img={Pigs} title="Unpopular opinion reveals pigs in blankets aint all that.." subcategory="Unpopular Opinons"></SmallCards>
    <SmallCards img={Schools} title="W3 Schools is officially better than MDN, says Jacob" subcategory="Truth"></SmallCards>
    <SmallCards img={Blinded} title="Maarja blinds the editor of fake news by making her look at bright lights" subcategory="Torture"></SmallCards>
    <MiddleCards img={Telmo} title="Portuguese man says 'Winner Winner Chicken Dinner' for the first time" subcategory="World"></MiddleCards>
    <SmallCards img={MacSmack} title="Smack the Mac day so popular, Apple are having to work overtime to make more" subcategory="Tech"></SmallCards>
    <MiddleCards img={Telmo} title="'Add a little bit of zoom so you can see', Now favourite alltime quote of the turing class" subcategory="World"></MiddleCards>
    <SmallCards img={} title="Turing was a motherf***ing bad ass, claims man to his bosses" subcategory="Unapologetically Jon"></SmallCards>
    <SmallCards img={} title="Woman makes soup so spicy that she has to down a litre of yoghurt a minute" subcategory="Food"></SmallCards>

  
    </div>
  );
}

export default App;
