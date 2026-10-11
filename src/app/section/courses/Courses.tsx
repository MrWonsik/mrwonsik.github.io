import React from "react";
import styled from "styled-components";
import CourseCard from "./CourseCard";
import { data } from "./data";
import { device } from "../../../const";

const CoursesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 28px;
    width: 100%;
    padding: 20px 0;

    @media ${device.mobile} {
        grid-template-columns: none;
    }
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