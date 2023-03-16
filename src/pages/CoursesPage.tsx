import React, {useEffect, useMemo, useState} from "react";
import {Box, Typography} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import {getCoursesData} from "../service/apiService";
import { ICourse } from "../types/types";
import CourseCard from "../components/CourseCard";
import Loader from "../components/Loader/Loader";

const CoursesPage : React.FC = () => {
    const [courses, setCourses] = useState<ICourse[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isHover, setIsHover] = useState<boolean>(false);
    const postsPerPage: number = 10;

    useEffect(() => {
        (async function getData() {
            setIsLoading(true);
            const data = await getCoursesData();
            setCourses(data.courses);
            setIsLoading(false);
        })()
    }, []);

    const visibleCourses = useMemo(() => {
        const startIndex: number = (currentPage - 1) * postsPerPage;
        const visibleCourses: ICourse[] = courses.slice(
            startIndex,
            startIndex + postsPerPage
        );
        return visibleCourses;
    }, [currentPage, courses, postsPerPage]);

    function totalPageCount(){
        return Math.ceil(courses.length / postsPerPage);
    }

    const handelChange=(e: React.ChangeEvent<unknown>, page: number)=>{
        setCurrentPage(page)
    }

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Box
                        maxWidth="lg"
                        sx={{ display: 'flex', flexWrap: 'wrap', mt: 2, justifyContent: 'center', margin:'0 auto'}}
                    >
                        {visibleCourses.map((course) => (
                            <CourseCard key={course.id} course={course}
                                        onMouseEnter={() => setIsHover(true)}
                                        onMouseLeave={() => setIsHover(false)}
                            />
                        ))}
                    </Box>
                    {!isLoading && (
                        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                            <Pagination count={totalPageCount()} onChange={handelChange}/>
                        </Box>
                    )}
                </>
            )}
        </>
    );
}

export default CoursesPage;