import React, {useEffect, useState} from "react";
import { ICourse } from "../types/types";
import { getCoursesData} from "../service/coursesService";
import { useParams } from "react-router-dom";
import {Card, Typography} from "@mui/material";
import Loader from "../components/Loader";
import Player from "../components/Player";

const CoursePage = () => {
    const [courses, setCourses] = useState<ICourse[]>([]);
    const { courseId } = useParams();

    useEffect(() => {
        async function getData() {
            const data = await getCoursesData();
            setCourses(data.courses);
        }
        getData()
    }, []);

    const data = courses.find((item:any)=> courseId === item.id)
    console.log("aaaa",data)

    return (
        <>
            {!data ? ( <Loader/>
            ) : (
                <>
                    <Typography variant="h3" gutterBottom>{data.title}</Typography>
                    <Card component="li" sx={{
                    minWidth: 300,
                    flexGrow: 1
                }}>
                   <Player video={data.meta.courseVideoPreview.link +".webp"}/>
                </Card>
                </>
            )}
        </>
    );
}

export default CoursePage;