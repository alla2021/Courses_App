import React, { useState, useRef } from 'react';
import {Typography} from "@mui/material";
import {ILesson} from "../types/types";

interface IPlayerProps {
    lesson: ILesson;
    onClick?: () => void;
}

const Player = ({lesson}:IPlayerProps ) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div>
            <Typography variant="body2">{lesson.title}</Typography>
            <video
                poster={`${lesson.previewImageLink}/${lesson.order}cover.webp`}
                src={lesson.link} controls />
        </div>

    )
}

export default Player;