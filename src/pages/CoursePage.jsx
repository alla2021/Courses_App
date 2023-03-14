import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getCourseById, getCoursesData} from "../service/coursesService";
 export function loader({params}){
     const id = params.id;
     return getCourseById(id);
 }
const CoursePage = () => {
    return (
        <>
           <div>Course </div>
        </>
    );
}

export default CoursePage;