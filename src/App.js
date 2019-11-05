import React from 'react';
import './App.css';
import Jacobgc from './images/jacobgeeclarke.jpeg'
import Jacob from './images/Jacobmanswins.jpeg'
import Natalja from './images/natalja.jpg'
import Pav from './images/pav.jpg'
import Pav2 from './images/pav2.jpg'
import Vicky from './images/vicky.jpg'
import Maarja from './images/Maarja.jpg'

function App() {
  return (
    <div className="App">
    <Box img= "Dean devasted as he loses in-work boyfriend to Jacob G Clarke"></Box>
    <Box img={Vicky} title="Keen Greenfingered lady causes devastaion to all plants in garden centre"></Box>
    <Box img={Natalja} title="The question everyone is asking, Who's Sarah?"></Box>
    <Box img={Maarja} title="Woman breaks mans arm in thumb war."></Box>
    </div>
  );
}

export default App;
