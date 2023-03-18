import React, { useState } from 'react';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import { ICourse } from "../types/types";
import { NavLink } from "react-router-dom";
import Player from "./Player/Player";

interface CoursesProps {
    course: ICourse;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}
function CourseCard({ course, onMouseEnter, onMouseLeave }: CoursesProps) {
    const [isHover, setIsHover] = useState<boolean>(false);

    return (
        <>
            <Card
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    m: 2,
                    width: 250,
                    cursor:"pointer",
                }}
                onMouseEnter={() => {
                    setIsHover(true);
                    onMouseEnter();
                }}
                onMouseLeave={() => {
                    setIsHover(false);
                    onMouseLeave();
                }}
            >
                <NavLink to={`${course.id}`}>
                {!isHover ? (
                    <CardMedia
                        component="img"
                        height="150px"
                        width='100%'
                        sx={{ display:'flex', alignItems:'center', }}
                        src={course.previewImageLink + "/cover.webp"}
                        alt={course.title}
                    />
                ):(
                    <Box height="150px">
                        <Player url={course.meta.courseVideoPreview.link}
                                muted={true}
                                autoPlay={true}
                        />
                    </Box>
                    )}
            </NavLink>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {course.description}
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        {course.lessonsCount} Lessons
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Skills: {course.meta.skills}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Rating: {course.rating}
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <NavLink to={`${course.id}`}>learn more</NavLink>
                </CardActions>
            </Card>

        </>
    );
}

export default CourseCard;