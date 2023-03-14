import React, {useEffect, useState} from "react";
import {Box, Typography} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import {getCoursesData} from "../service/coursesService";
import { ICourse } from "../types/types";
import CourseCard from "../components/CourseCard";
import Loader from "../components/Loader";

const CoursesPage : React.FC= () => {
    const [courses, setCourses] = useState<ICourse[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const postsPerPage: number = 10;

    useEffect(() => {
        async function getData() {
            const data = await getCoursesData();
            setCourses(data.courses);
        }
        getData();
    }, []);

    function calculateVisibleCourses(courses: ICourse[], currentPage: number): ICourse[] {
        const startIndex: number = (currentPage - 1) * postsPerPage;
        const visibleCourses: ICourse[] = courses.slice(startIndex, startIndex + postsPerPage);
        return visibleCourses;
    }

    function totalPageCount(){
        return Math.ceil(courses.length / postsPerPage);
    }

    const visibleCourses = calculateVisibleCourses(courses, currentPage);

    const handelChange=(e: React.ChangeEvent<unknown>, page: number)=>{
        setCurrentPage(page)
    }

    return (
        <>
        <Typography  gutterBottom variant="h2">Courses Page</Typography>
            <Box
                maxWidth="lg"
                sx={{ display: 'flex', flexWrap: 'wrap', mt: 2, justifyContent: 'center', margin:'0 auto'}}
            >
            {courses.length <= 0 ? (
                Loader()
            ) : (visibleCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))
            )}
            </Box>
            <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                <Pagination count={totalPageCount()} onChange={handelChange}/>
            </Box>
    </>
    );
}

export default CoursesPage;