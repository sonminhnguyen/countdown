import { useState } from 'react';
import useSound from 'use-sound';
import ReactAudioPlayer from 'react-audio-player';
import Button from 'react-bootstrap/Button';
import HappyNewYear from './HappyNewYear.mp3';

const PlaySound = () => {
    const [play, { stop }] = useSound(HappyNewYear);
    const [hide, setHide] = useState(false)

    const handleOnClick = () => {
        play();
        setHide(true)
    }
    return (
        <Button  className='sound' onClick={handleOnClick}>
            <span role="img" aria-label="trumpet">
            🎺
           </span> 
        </Button>
    );
};

export default PlaySound;
