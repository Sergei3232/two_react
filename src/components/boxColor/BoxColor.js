import React from 'react';
import './BoxColor.css';

function colorStatus(props) {

    const greenStyle = props.green ? 'colorGreen boxT' : 'colorNoGreen boxT';
    const yellowStyle = props.yellow ? 'colorYellow boxT' : 'colorNoYellow boxT';
    const redStyle = props.red ? 'colorRed boxT' : 'colorNoRed boxT';

    return (
        <div>
            <div className = 'box_color'>
                <div className={greenStyle}></div>
                <div className={yellowStyle}></div>
                <div className={redStyle}></div>
            </div>
            <div className='box_button'>
                <button onClick = {props.localStateSave}>Save current color</button>
                <button onClick = {props.localStateClear}>Reboot color</button>
            </div>
        </div>

    );
}

export default colorStatus;
