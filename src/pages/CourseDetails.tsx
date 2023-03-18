import React, { useEffect, useState } from "react";
import { ICourseDetails, ILesson } from "../types/types";
import { getCourseById } from "../service/apiService";
import { useParams } from "react-router-dom";
import { Typography, Box, CardMedia, Card} from "@mui/material";
import Loader from "../components/Loader/Loader";
import Player from "../components/Player/Player";
import BasicModal from "../components/BasicModal/BasicModal";

const CourseDetails = () => {
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
            <Box sx={{ display: 'flex', justifyContent: 'center', margin :' 0 auto', flexDirection: 'column', width: "60%" }}>
                <Typography variant="h4">Course name: {title}</Typography>
                <Typography variant="body2">Description: {description}</Typography>
                <Player lesson={lessons[0]} controls={true}/>
            </Box>
            {lessons && lessons.length > 0 && (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center', mt: 2,}}>
                    {lessons.slice(1, lessons.length).map((item) => (
                        <Box  sx={{maxWidth:'300px', }}>
                            {item.status === "locked" ? (
                                <>
                                    <Card key={item.id} sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        m: 2,
                                        width: 240,
                                    }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: '250px' }}
                                            alt={item.title}
                                            src={`${item.previewImageLink}/lesson-${item.order}.webp`}
                                        />
                                        <Typography variant="body2">{item.title}</Typography>
                                        <Typography
                                            variant="caption"
                                            color="#f50057"
                                            display="block"
                                            gutterBottom
                                        >
                                            (locked)
                                        </Typography>
                                    </Card>
                                </>
                            ) : (
                                <Card
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        m: 2,
                                        width: 240,
                                        cursor: 'pointer'
                                    }}
                                    key={item.id}
                                    onClick={() => {
                                    setSelectedLesson(item);
                                    handleOpen();
                                }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: '250px' }}
                                        alt={item.title}
                                        src={`${item.previewImageLink}/lesson-${item.order}.webp`}
                                    />
                                    <Typography variant="body2">{item.title}</Typography>
                                </Card >
                            )}
                        </Box>
                    ))}
                </Box>
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

export default CourseDetails