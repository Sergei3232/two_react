import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TimerStatus from './components/timer/Timer.js';
import ColorStatus from './components/boxColor/BoxColor.js';
import * as serviceWorker from './serviceWorker';
// import { BrowserRouter, Route } from 'react-router-dom'


class GlobalCom extends React.Component {
    constructor(props) {
        super(props);
        const colorStatus = sessionStorage.getItem('color');
        const colorRun = sessionStorage.getItem('colorRun');
        const objectStateColor = { seconds: 10, red: false, yellow: false, green: true, greenIn: true, redIn: false };

        if (colorStatus === 'red') {// устанавливаем данные из локального хранилища

            objectStateColor.seconds = 10;
            objectStateColor.red = true;

            objectStateColor.yellow = false;
            objectStateColor.green = false;

            objectStateColor.greenIn = true;
            objectStateColor.redIn = false;
        }
        else if (colorStatus === 'yellow') {

            objectStateColor.seconds = 3;
            objectStateColor.red = false;
            objectStateColor.yellow = true;
            objectStateColor.green = false;
            if (colorRun === 'greenIn') {
                objectStateColor.greenIn = true;
                objectStateColor.redIn = false;
            }
            else {
                objectStateColor.greenIn = false;
                objectStateColor.redIn = true;
            }
        }
        else if (colorStatus === 'green') {

            objectStateColor.seconds = 10;
            objectStateColor.red = false;
            objectStateColor.yellow = false;
            objectStateColor.green = true;
            objectStateColor.greenIn = false;
            objectStateColor.redIn = true;
        };

        this.state = {
            seconds: objectStateColor.seconds,
            red: objectStateColor.red,
            yellow: objectStateColor.yellow,
            green: objectStateColor.green,
            redIn: objectStateColor.redIn,
            greenIn: objectStateColor.greenIn
        };

    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.timeUp(),
            1000
        );
    }

    timeUp() {
        let stateTime = this.state.seconds;
        --stateTime;

        if (stateTime >= 0)//общий таймер
        {
            this.setState({
                seconds: stateTime
            });
        }

        else {//тут переназначаем время в зависимости от текущего цвета 
            if (this.state.red) {
                this.setState({ yellow: true });
                this.setState({ seconds: 3 });

                this.setState({ red: false });
                this.setState({ greenIn: true });
                this.setState({ redIn: false });

                sessionStorage.setItem('color', 'yellow');
                sessionStorage.setItem('colorRun', 'greenIn');
            }
            else if (this.state.yellow && this.state.greenIn) {

                this.setState({ green: true });
                this.setState({ seconds: 10 });

                this.setState({ yellow: false });

                sessionStorage.setItem('color', 'green');

            }
            else if (this.state.yellow && this.state.redIn) {

                this.setState({ red: true });
                this.setState({ seconds: 10 });

                this.setState({ yellow: false });

                sessionStorage.setItem('color', 'red');

            }

            else if (this.state.green) {

                this.setState({ yellow: true });
                this.setState({ seconds: 3 });

                this.setState({ green: false });
                this.setState({ redIn: true });
                this.setState({ greenIn: false });

                sessionStorage.setItem('color', 'yellow');
                sessionStorage.setItem('colorRun', 'redIn');
            }
        }
    }

    render() {
        return (

            <div>
                <ColorStatus green = {this.state.green} yellow = {this.state.yellow} red = {this.state.red} />
                <TimerStatus time = {this.state.seconds}/>
            </div>                      

        )

    }
}


ReactDOM.render(<GlobalCom />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
