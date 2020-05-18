import React ,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'; 
import Card from './Card'
import { connect } from 'react-redux';
import * as actions from '../Actions';

function App(props) {
  let cards = [{suit:'H', rank:'A'},
  {suit:'H', rank:'K'},
  {suit:'D', rank:'Q'},
  {suit:'H', rank:'J'},
  {suit:'S', rank:'10'},
  {suit:'H', rank:'8'},
  {suit:'C', rank:'9'}]
  let initialValue = new Array(8).fill(false);
  const [clicks, setClicks] = useState(initialValue);  
  function click(i){
    let newClicks = new Array(8).fill(false);
    newClicks[i]=true;
    setClicks(newClicks);
  }
  let CardsToDisplay =cards.map((card,i)=> <div onClick={()=>click(i)} className={ clicks[i] ? "go" : ""}> 
    <Card key={i}  rank={card.rank} suit={card.suit}/> 
    </div>);
  const backs = cards.map((card,i)=> <Card key={i} back={true}/>); 
  useEffect(()=>{
    let roomId = props.location.search.split('=')[1];
    axios.get('/api/room'+roomId)
    .then(res => {
      console.log(res.data);
    });
  },[]);
  return (
    <div className="App">
      <header className="App-header">
          TWINTYNINE the game
      </header>

      <div class="deck" >
        {CardsToDisplay}
      </div>
      <div class="partner" >
        {backs}
      </div>
      <div class="op1" >
        {backs}
      </div>
      <div class="op2" >
        {backs}
      </div>
    </div>
  );
}

export default App;
