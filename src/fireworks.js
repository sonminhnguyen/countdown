import { Fireworks } from 'fireworks-js/dist/react'

const FunctionFire = () => {
    const options = {
        speed: 10,
        rocketPoint: 10,
        acceleration: 1,
        opacity: 0.7,
        friction: 0.98,
        gravity: 1.5,
        trace: 6,
        explosion: 8,
        delay: {
            min: 8,
            max: 10
        },
        particles: 200,
        autoresize: true,
        hue: {
            min: 0,
            max: 345
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

    return (
        <div >
            <Fireworks options={options} className='fireworks-container' />

        </div>
    )
}
export default FunctionFire;