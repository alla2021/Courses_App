import React from 'react';
type PlayerProps={
    video: string,
}
const Player = ({video}:PlayerProps) => {
    return (
        <div>
            <video width="100%" height="100%" controls>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default Player;