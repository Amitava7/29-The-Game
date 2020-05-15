import React ,{useState} from 'react';
import './App.css';

function Card(props) {
  return (
      props.back ?
    <img className="card" src={'/red_back.png'}/>
    :
    <img className="card" src={'/'+props.rank+props.suit+'.png'}/>
  );
}

export default Card;
