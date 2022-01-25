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

    return (
        <div >
            <Fireworks options={options} className='fireworks-container' />

        </div>
    )
}
export default FunctionFire;