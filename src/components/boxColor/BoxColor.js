import React from 'react';
import './BoxColor.css';

 function colorStatus(props){
    
    let greenStyle  = props.green?'colorGreen boxT':'colorNoGreen boxT';
    let yellowStyle = props.yellow?'colorYellow boxT':'colorNoYellow boxT';
    let redStyle    = props.red?'colorRed boxT':'colorNoRed boxT';
     
      return (
          <div className = 'box_color'>
              <div className = {greenStyle}></div>
              <div className = {yellowStyle}></div>
              <div className = {redStyle}></div>    
          </div>
      );
 }

export default colorStatus;
