import { useState } from 'react';
import Sound from 'react-sound'; 
import useSound from 'use-sound';
import ReactAudioPlayer from 'react-audio-player';
import Button from 'react-bootstrap/Button';
import HappyNewYear from './HappyNewYear.mp3';

const PlaySound = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    return (
        <>
            <Button  className='sound' onClick={() =>setIsPlaying(!isPlaying)}>
                <span role="img" aria-label="trumpet">
                🎺
            </span> 
            </Button>
            <Sound
            url={HappyNewYear}
            playStatus={isPlaying? Sound.status.PLAYING : Sound.status.STOPPED}
            playFromPosition={0 /* in milliseconds */}
            />
        
        </>
    );
};

export default PlaySound;
