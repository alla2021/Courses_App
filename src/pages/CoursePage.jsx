import React, {useEffect, useState} from "react";
import {ICourse, ILesson} from "../types/types";
import {getCourseById } from "../service/coursesService";
import { useParams } from "react-router-dom";
import {List, ListItem, Typography} from "@mui/material";
import Loader from "../components/Loader";
import Player from "../components/Player";

const CoursePage = () => {
    const [course, setCourse] = useState({});
    const [lessons, setLessons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { courseId } = useParams();

    useEffect(() => {
        (async function getData() {
            setIsLoading(true);
            const data = await getCourseById(courseId);
             setCourse(data);
            setLessons(data.lessons)
            setIsLoading(false);
        })()
    }, [courseId]);

    console.log("Cours",course)
    console.log("Less",lessons)

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Typography variant="body1">{course.title}</Typography>
                    {/*<Player video={course.meta.courseVideoPreview.link +".webp"}/>*/}
                    <Typography variant="body2">Lessons</Typography>
                    <List>
                    {lessons.map((item) =>
                        <ListItem key={item.id}>{item.title}</ListItem>)
                    }
                    </List>
                </>
            )}
        </>
    );
}

export default CoursePage;


