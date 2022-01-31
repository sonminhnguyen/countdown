import React, { useState, createContext, useContext } from "react";
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from "react-countdown";

import DateTimePicker from 'react-datetime-picker';
import moment from "moment";
import Button from "react-bootstrap/Button";
import FunctionFire from "./fireworks";
import PlaySound from "./sound";
import logo from './logo.svg';
import './App.css';

const Context = createContext();

const App = () => {
	const [click, setClick] = useState(false)
	const [value, onChange] = useState(new Date(Date.now() + 3600000));
	const [text, setText] = useState("Happy New Year")

	const handleClick = () => {
		setClick(!click)
	}
	const handleText = (e) => {
		e.preventDefault();
		setText(e.target.value)
	}
	return (
		<div >
			<Button style={{backgroundColor: '#808080', margin: 'auto', zIndex:1,  position: 'relative'}} onClick={handleClick}>+</Button>
			{click ?
				<div className="inputInfo">
					<DateTimePicker
						onChange={onChange}
						value={value}
					/>
					<br />
					Text: <input type="text" onChange={handleText} value={text}></input>
				</div>
				:
			""}
			<Context.Provider value={text}>
				<PlaySound />
				<Countdown
					date={moment(value).format()}
					renderer={renderer}
				/>
			</Context.Provider>

		</div>
	)
}
const TextRender = () => {
	const text = useContext(Context);
	console.log(text);
	return (
		<div className="container happynewyear">{text}</div>
	)
}

const renderer = ({ days, hours, minutes, seconds, completed }) => {
	if (completed) {
		// Render a complete state
		return (
			<>
				<TextRender />
				<FunctionFire />
			</>
		);
	}
	else if (hours === 0 && minutes < 1) {
		// Render a big countdown
		return (
			<>
				<span className="container big-countdown">
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

export default App;
