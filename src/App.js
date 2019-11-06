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
// import Arsenal from './images/Arsenal.jpg'
import Telmo from './images/Telmo.png'
import Blinded from './images/blinded.jpg'
import MacSmack from './images/macsmack.jpg'
// import Pigs from './images/pigs.jpg'
// import Pineapple from './images/pineapple.jpg'
import Hamza from './images/Hamza.jpg'
import Schools from './images/w3.jpeg'
import Raisins from './images/Raisins.jpeg'
import Quagmire from './images/giggity.jpg'
import Nicky from './images/Nicky.JPG'
import Spicy from './images/spicyfood.png'
import Jon from './images/jon.jpg'
import Sharp from './images/sharpAd.jpg'
import Logo from './images/logo.png'
import Southcoders1 from './images/southcoders1.jpg'
import Southcoders2 from './images/southcoders2.jpg'
import SmallCards from '../src/components/SmallCards'
import MiddleCards from '../src/components/MiddleCards'
import MainCard from '../src/components/MainCard'
import AdCards from './components/AdCards'
import Footer from './components/Footer'
import NavBarTop from './components/NavBarTop'
import NavBarBottom from './components/NavBarBottom'

import Opinion from './components/Opinion'
import Lifestyle from './components/Lifestyle'
import Culture from './components/Culture'
import Sport from './components/Sport'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (

      <div className="App">
        <BrowserRouter>
          <div>
            <NavBarTop img={Logo} />

            <Switch>
              <Route path="/opinion" component={Opinion} />
              <Route path="/lifestyle" component={Lifestyle} />
              <Route path="/culture" component={Culture} />
              <Route path="/sport" component={Sport} />
            </Switch>
          </div>
        </BrowserRouter>
        <div className="firstSection">


          <MainCard img={Natalja} title="The question everyone is asking, Who's Sarah?" />
          <AdCards img={Sharp} />
          <MiddleCards img={Jacob} title="Man finally wins his first Ping-Pong match against a 3 year old" subcategory="Not really a sport" />
          <MiddleCards img={Telmo} title="Portuguese man says 'Winner Winner Chicken Dinner' for the first time" subcategory="World" />
        </div>
        <div className="secondSection">
          <SmallCards img={Nicky} title="Nicky is now 18 weeks in on the course and still doesnt know anything" subcategory="Numbnuts" />
          <SmallCards img={Schools} title="W3 Schools is officially better than MDN, says Jacob" subcategory="Truth" />
          <SmallCards img={Quagmire} title="How much Giggity is too much Giggity?" subcategory="Filth" />
          <MiddleCards img={Jacobgc} title="Dean devasted as he loses in-work boyfriend to Jacob G Clarke" subcategory="Guylove" />
          <SmallCards img={Hamza} title="Hamza missing classes due to advising Larry Page on running google more efficiently" subcategory="HyperTech" />
          <SmallCards img={MacSmack} title="Smack the Mac day so popular, Apple are having to work overtime to make more" subcategory="Tech" />
          <SmallCards img={Jon} title="Turing was a motherf***ing bad ass, claims man to his bosses" subcategory="Unapologetically Jon" />
        </div>
        <div className="thirdSection">
          <MiddleCards img={Vicky} title="Keen Greenfingered lady sets fire to all plants in garden centre in mad ZenGarden rage" subcategory="Vegetarians" />
          <SmallCards img={Maarja} title="Woman breaks mans arm in thumb war." subcategory="The Hulkess" />
          <SmallCards img={Pav} title="Polish man changes his name to 'Pepe le Pav'" subcategory="World" />
          <SmallCards img={Train} title="Man retires after earning 1m in delayed train fares in 3 months" subcategory="Money" />
          <AdCards img={Southcoders1} />
        </div>
        <div className="fourthSection">
          <MiddleCards img={Telmo} title="'Add a little bit of zoom so you can see', Now favourite alltime quote of the turing class" subcategory="World" />
          <SmallCards img={Spicy} title="Woman makes soup so spicy that she has to down a litre of yoghurt a minute" subcategory="Food" />
          <SmallCards img={Raisins} title="Sneaky raisins finding there way into peoples food" subcategory="Wrong" />
          <SmallCards img={Blinded} title="Maarja blinds the editor of fake news by making her look at bright lights" subcategory="Torture" />
          <AdCards img={Southcoders2} />
        </div>

        {/* <SmallCards img={Arsenal} title="Arsenal lose AGAIN!" subcategory="Sports" /> */}

        {/* <SmallCards img={Pineapple} title="Pineapple does not belong on a pizza no matter what Maarja says"  subcategory="Food" /> */}
        {/* <SmallCards img={Pigs} title="Unpopular opinion reveals pigs in blankets aint all that.." subcategory="Unpopular Opinons" /> */}




        {/* <NavBarBottom /> */}
        <Footer img={Logo} />
      </div>
    );
  }
}

export default App;
