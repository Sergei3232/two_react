import React from 'react';
import './Timer.css';

 function timerStatus(props) {

      return (
          <div className ='box_timer'>
              <h1>{props.time}</h1>    
          </div>
      );
 }

export default timerStatus;