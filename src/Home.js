import React ,{useState} from 'react';
import './Home.css';

function Home(props) {
  let click = ()=>{
    alert('sr');
  }
  return (<div className="home">
    <div class='title'>
       <div class="pic"></div>
      <div class="sign">
        < span class="fast-flicker">29</span>... THE G<span class="flicker">A</span>ME
      </div>
    </div>
    <div class="homebtns">
      <div class="sign" onClick={click}>
          Create Room
        </div>
        <div class="sign" onClick={click}>
          Join Room
        </div>
    </div>  
  </div>);
}

export default Home;
