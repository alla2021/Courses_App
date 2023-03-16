import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header"
import CourseDetails from "./pages/CourseDetails";
import CoursesPage from "./pages/CoursesPage";

function App() {
  return (
    <>
        <Header title={"My courses"}/>
        <Routes>
            <Route path="/core/preview-courses/" element={<CoursesPage/>}/>
            <Route path="/core/preview-courses/:courseId" element={<CourseDetails />} />
        </Routes>
    </>
  );
}

export default App;
