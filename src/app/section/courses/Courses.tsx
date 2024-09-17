import React from "react";
import styled from "styled-components";
import CourseCard from "./CourseCard";
import { data } from "./data";

const CoursesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  justify-content: space-evenly;
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
