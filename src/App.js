import React from "react";
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from "react-countdown";
import FunctionFire from "./fireworks";
import PlaySound from "./sound";
import moment from "moment";
import logo from './logo.svg';
import './App.css';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
	if (completed) {
		// Render a complete state
		return (
			<>
				<div>Happy New Year</div>
				<FunctionFire />
			</>
		);
	}
	else if (hours === 0 && minutes < 1) {
		// Render a big countdown
		return (
			<>
				<PlaySound />
				<span className="big-countdown">
					{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
				</span>
			</>
		);

	}
	else {
		//Render a small countdown
		return (
			<span className="small-countdown">
				{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
			</span>
		)
	}
};

const App = () => {
	return (
		<div className="container">
			<Countdown
				// date='2022-01-26T16:52:00'
				date={Date.now() + 65000}
				renderer={renderer}
			/>
		</div>
	)
}

export default App;
