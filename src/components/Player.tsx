import React, { useState, useRef } from 'react';
type PlayerProps={
    video: string,
}


const Player = ({video}:PlayerProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    // const togglePlay = () => {
    //     if (isPlaying) {
    //         videoRef.current.pause();
    //     } else {
    //         videoRef.current.play();
    //     }
    //     setIsPlaying(!isPlaying);
    // };

    return (
        <div>
            <video
                ref={videoRef}
                width="100%"
                height="100%"
                controls
            >
                <source src={video} type="video/mp4" />
            </video>
            {/*<button onClick={togglePlay}>*/}
            {/*    {isPlaying ? "Pause" : "Play"}*/}
            {/*</button>*/}
        </div>
    )
}

export default Player;