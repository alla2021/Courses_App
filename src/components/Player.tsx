import React, { useEffect, useRef } from 'react';
import { Typography, Box } from "@mui/material";
import {ICourse, ILesson} from "../types/types";
import Hls from 'hls.js';

interface IPlayerProps {
    lesson: ILesson;
    onClick?: () => void;
}

const Player = ({lesson}:IPlayerProps ) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(lesson.link);
            hls.attachMedia(video);
        } else {
            video.src = lesson.link;
        }
        const progress = JSON.parse(localStorage.getItem('progress') || '{}');
        const savedTime = progress[lesson.id];
        if (savedTime) {
            video.currentTime = savedTime;
        }

        return () => {
            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.destroy();
            }
        };
    }, [lesson.link]);


    const saveProgress = (lessonId: string, currentTime: number) => {
        const progress = JSON.parse(localStorage.getItem('progress') || '{}');
        progress[lessonId] = currentTime;
        localStorage.setItem('progress', JSON.stringify(progress));
    };

    const handlePlay = () => {
        if (videoRef.current) {
            const currentTime = videoRef.current.currentTime;
            saveProgress(lesson.id, currentTime);
            videoRef.current.play();
        }
    };

    return (
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection: 'column', width:'100%'}}  >
            <Typography variant="body2">{lesson.title}</Typography>
            <video
                controls
                width='100%'
                onPlay={handlePlay}
                ref={videoRef}
            >
            </video>
        </Box>
    );
};

export default Player;