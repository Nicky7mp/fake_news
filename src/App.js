import React from 'react';
import './App.css';

import Logo from './images/logo.png' 
import SmallCards from '../src/components/SmallCards'
import MiddleCards from '../src/components/MiddleCards'
import MainCard from '../src/components/MainCard'
import AdCards from './components/AdCards'
import Footer from './components/Footer'
import NavBarTop from './components/NavBarTop'
import NavBarBottom from './components/NavBarBottom'

import News from './components/News'
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
              <Route exact path="/" render={() => <News title="News Home" />} />
              <Route path="/opinion" component={Opinion} />
              <Route path="/lifestyle" component={Lifestyle} />
              <Route path="/culture" component={Culture} />
              <Route path="/sport" component={Sport} />
            </Switch>
          </div>
        </BrowserRouter>
       
        <Footer img={Logo} />
      </div>
    );
  }
}

export default App;
