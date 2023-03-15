import React, { useState, useRef } from 'react';
import {Typography} from "@mui/material";
import {ILesson} from "../types/types";

interface IPlayerProps {
    lesson: ILesson;
}

const Player = ({lesson}:IPlayerProps ) => {
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
            <Typography variant="h4">{lesson.title}</Typography>
            <video src={lesson.link} controls />
        </div>
    )
}

export default Player;