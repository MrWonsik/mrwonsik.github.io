import React from "react";
import styled from "styled-components";
import CourseCard from "./CourseCard";
import { data } from "./data";

const CoursesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
    justify-content: center;
    align-items: stretch;
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