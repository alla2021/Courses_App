import React, { useEffect, useRef } from 'react';
import { Box } from "@mui/material";
import Hls from 'hls.js';
import {ILesson} from "../../types/ILesson";

interface IPlayerProps {
    lesson?: ILesson;
    onClick?: () => void;
    url?:string;

    muted?: boolean;
    autoPlay?:boolean;
    controls?:boolean;
}


const Player = ({ lesson, url, muted, autoPlay, controls }: IPlayerProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(url || lesson?.link || '');
            hls.attachMedia(video);
        } else {
            video.src = url || lesson?.link || '';
        }
        const progress = JSON.parse(localStorage.getItem('progress') || '{}');
        const savedTime = progress[lesson?.id || url || ''];
        if (savedTime) {
            video.currentTime = savedTime;
        }

        return () => {
            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.destroy();
            }
        };
    }, [lesson?.id, lesson?.link, url]);

    const saveProgress = (id: string, currentTime: number) => {
        const progress = JSON.parse(localStorage.getItem('progress') || '{}');
        progress[id] = currentTime;
        localStorage.setItem('progress', JSON.stringify(progress));
    };

    const handlePlay = () => {
        if (videoRef.current) {
            const currentTime = videoRef.current.currentTime;
            saveProgress(lesson?.id || url || '', currentTime);
            videoRef.current.play();
        }
    }

    return (
        <Box>
            <video
                controls={controls || false}
                width='100%'
                onPlay={handlePlay}
                ref={videoRef}
                autoPlay={autoPlay||false}
                muted={muted || false}
            />
        </Box>
    );
};

export default Player;