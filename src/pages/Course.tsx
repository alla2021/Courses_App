import React, { useEffect, useState } from "react";
import { ICourseDetails, ILesson } from "../types/types";
import { getCourseById } from "../service/apiService";
import { useParams } from "react-router-dom";
import { List, ListItem, Typography, Button } from "@mui/material";
import Loader from "../components/Loader";
import Player from "../components/Player";
import BasicModal from "../components/BasicModal";

const Course = () => {
    const [course, setCourse] = useState<ICourseDetails>();
    const { courseId } = useParams<{ courseId: string }>();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedLesson, setSelectedLesson] = useState<ILesson>();

    useEffect(() => {
        (async function getData() {
            try {
                const data = await getCourseById(courseId);
                setCourse(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [courseId]);

    if (!course) {
        return <Loader />;
    }

    const { title, description, lessons } = course;

    const handleOpen = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Typography variant="h4">Course name: {title}</Typography>
            <Typography variant="body2">Description: {description}</Typography>
            <Player lesson={lessons[0]} />
            {lessons && lessons.length > 0 && (
                <List>
                    {lessons.slice(1, lessons.length).map((item) => (
                        <ListItem key={item.id}>
                            {item.status === "locked" ? (
                                <>
                                    <Typography variant="body2">{item.title}</Typography>
                                    <Typography
                                        variant="caption"
                                        color="#f50057"
                                        display="block"
                                        gutterBottom
                                    >
                                        (locked)
                                    </Typography>
                                </>
                            ) : (
                                <Button variant="text" onClick={() => {
                                    setSelectedLesson(item);
                                    handleOpen();
                                }}>
                                    <Typography variant="body2">{item.title}</Typography>
                                </Button>
                            )}
                        </ListItem>
                    ))}
                </List>
            )}
            {selectedLesson && (
                <BasicModal
                    lesson={selectedLesson}
                    isModalOpen={isModalOpen}
                    handleClose={handleClose}
                />
            )}
        </div>
    );
};

export default Course