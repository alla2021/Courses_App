import React from 'react';
type PlayerProps={
    video: string,
}
const Player = ({video}:PlayerProps) => {
    return (
        <div>
            <video width="50%" height="50%" controls>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default Player;