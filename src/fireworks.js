import { Fireworks } from 'fireworks-js/dist/react'

const FunctionFire = () => {
	const options = {
		speed: 4,
		acceleration: 1,
		delay: {
			min: 15, 
			max: 20
		},
		sound: {
			enabled: true,
			files: [
				"https://fireworks.js.org/sounds/explosion0.mp3",
				"https://fireworks.js.org/sounds/explosion1.mp3",
				"https://fireworks.js.org/sounds/explosion2.mp3"
			],
			volume: {
				min: 20,
				max: 20
			}
		},
	}

	const style = {
        "position": "fixed",
        "left": "0",
        "top": "0",
        "width": "100%",
        "height": "100%",
        // "background": "#000000",
        "backgroundSize": "cover",
        "backgroundPosition": "1% 10%",
        "backgroundRepeat": "no-repeat",
        "display": "block",
	}

	return <Fireworks options={options} style={style} />
}
export default FunctionFire;