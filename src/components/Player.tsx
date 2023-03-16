import React, { useRef } from 'react';
import {Typography} from "@mui/material";
import {ILesson} from "../types/types";
import ReactPlayer from "react-player";

interface IPlayerProps {
    lesson: ILesson;
    onClick?: () => void;
}

const Player = ({lesson}:IPlayerProps ) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };
console.log(`${lesson.link}`)
    return (
        <div>
            <Typography variant="body2">{lesson.title}</Typography>
            <video
                // poster={`${lesson.previewImageLink}/${lesson.order}/cover.webp`}
                controls
                width='300px'
                height='200px'
                onPlay={handlePlay}
                ref={videoRef}
                src={lesson.link}
                muted
            >
            {/*<source  src={lesson.link} type="application/x-mpegURL" />*/}
            </video>
        </div>

    )
}

export default Player;