import React from "react";
import styled from "styled-components";
import CourseCard from "./CourseCard";
import { data } from "./data";

const CoursesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
    gap: 28px;
    width: 100%;
    padding: 20px 0;
`;

function Courses() {
  return (
    <CoursesContainer>
      {data.map((course) => (
        <CourseCard key={course.id} courseCard={course} />
      ))}
    </CoursesContainer>
  );
}

export default Courses;