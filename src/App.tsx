import React from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import CoursePage from "./pages/CoursePage";
import CoursesPage from "./pages/CoursesPage";

function App() {
  return (
    <>
        <Header title={"My courses"}/>
        <Routes>
            <Route path="/core/preview-courses/" element={<CoursesPage/>}/>
            <Route path="/core/preview-courses/:courseId" element={<CoursePage />} />
        </Routes>
    </>
  );
}

export default App;
