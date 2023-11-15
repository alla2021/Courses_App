import React from 'react';
import {
    Route, Routes, Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header"
import CourseDetails from "./pages/CourseDetails";
import CoursesPage from "./pages/CoursesPage";
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
        <Header title={"MY COURSES"}/>
        <Routes>
            <Route path="/Courses_App/" element={<HomePage />} />
            <Route path="/core/preview-courses/" element={<CoursesPage/>}/>
            <Route path="/core/preview-courses/:courseId" element={<CourseDetails />} />
        </Routes>
    </>
  );
}

export default App;
