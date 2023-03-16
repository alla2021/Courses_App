import React, {useEffect, useRef} from 'react';
import {Typography} from "@mui/material";
import {ILesson} from "../types/types";
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

        return () => {
            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.destroy();
            }
        };
    }, [lesson.link]);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };
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
                muted
            >
            </video>
        </div>
    );
};

export default Player;