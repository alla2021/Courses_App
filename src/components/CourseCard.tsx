import React, {useState,useMemo} from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import { ICourse } from "../types/types";
import { NavLink } from "react-router-dom";

interface CoursesProps {
    course: ICourse;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

function CourseCard ({ course, onMouseEnter, onMouseLeave }: CoursesProps) {
    const [isHover, setIsHover] = useState<boolean>(false);

    return (
        <>
                <Card
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        m: 2,
                        width: 240,
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
                    <CardMedia
                        component="img"
                        height="140"
                        src={!isHover ? course.previewImageLink + '/cover.webp' : course.meta.courseVideoPreview.link }
                        alt={course.title}
                    />
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
                    <CardActions  sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                        <NavLink to={`${course.id}`}>
                            learn more
                        </NavLink>
                    </CardActions>
                </Card>
        </>
    );
}

export default CourseCard;