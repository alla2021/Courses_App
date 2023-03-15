import React, { useEffect, useState } from "react";
import { ICourseDetails, ILesson } from "../types/types";
import { getCourseById } from "../service/coursesService";
import { useParams } from "react-router-dom";
import { Link, List, ListItem, Typography } from "@mui/material";
import Loader from "../components/Loader";
import Player from "../components/Player";

const Course = () => {
    const [course, setCourse] = useState<ICourseDetails>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { courseId } = useParams();

    useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true);
                const data = await getCourseById(courseId);
                setCourse(data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, [courseId]);

    if (!course) {
        return <Loader />;
    }

    const { title, description, lessons } = course;

    return (
        <div>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="body2">{description}</Typography>
            {lessons && lessons.length > 0 && (
                <List>
                    {lessons.map((item) => (
                        <ListItem key={item.id}>{item.title}</ListItem>
                    ))}
                </List>
            )}
        </div>
    );
};

export default Course;


