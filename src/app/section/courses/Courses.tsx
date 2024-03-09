import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import CourseCard from "./CourseCard";
import { CourseInfo } from "./CourseInfo";

const CoursesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  justify-content: space-evenly;
`;

function Courses() {
  const { t } = useTranslation();

  const coursesData: Array<CourseInfo> = [
    {
      id: "DNA",
      course: {
        logoSrc: "/img/courses/dna.png",
        url: "https://droganowoczesnegoarchitekta.pl",
      },
      author: {
        name: "Jakub Pilomon, Mateusz Gil, Sławomir Sobótka",
      },
      platform: {
        logoSrc: "/img/courses/devstyle.png",
      },
      dateOfCompletion: `${t("month.feb")} 2024`,
    },
    {
      id: "LF",
      course: {
        logoSrc: "/img/courses/LegacyFighter.png",
        url: "https://legacyfighter.pl",
      },
      author: {
        name: "Jakub Pilomon, Łukasz Szydło, Jakub Kubryński",
      },
      platform: {
        logoSrc: "/img/courses/devstyle.png",
      },
      dateOfCompletion: `${t("month.apr")} 2023`,
    },
    {
      id: "TSinReact",
      course: {
        name: "Programowanie TypeScript w frameworku React",
      },
      author: {
        name: "Michał Jabłoński",
      },
      platform: {
        logoSrc: "/img/courses/altkomakademia.png",
      },
      dateOfCompletion: `${t("month.oct")} 2022`,
    },
    {
      id: "OracleJava",
      course: {
        name: "Przygotowanie do certyfikatu Oracle Certified Professional Java Developer SE 11",
        url: "https://www.altkomakademia.pl/szkolenia/oracle-certified-professional-java-developer-se-11/",
      },
      author: {
        name: "Lech Proboszcz",
      },
      platform: {
        logoSrc: "/img/courses/altkomakademia.png",
      },
      dateOfCompletion: `${t("month.feb")} 2022`,
    },
    {
      id: "TSwithReact",
      course: {
        name: "Using TypeScript with React",
        url: "https://www.udemy.com/course/react-with-typescript",
      },
      author: {
        name: "Dmytro Danylov",
      },
      platform: {
        logoSrc: "/img/courses/udemy.png",
      },
      dateOfCompletion: `${t("month.jan")} 2022`,
    },
    {
      id: "ModernProjectsReact",
      course: {
        name: "Bulding Modern Projects with React",
        url: "https://www.linkedin.com/learning/building-modern-projects-with-react",
      },
      author: {
        name: "Shaun Wassell",
      },
      platform: {
        logoSrc: "/img/courses/linkedinlearning.png",
      },
      dateOfCompletion: `${t("month.feb")} 2021`,
    },
    {
      id: "solid",
      course: {
        name: "Java Design Patterns & SOLID Design Principles",
        url: "https://www.udemy.com/course/design-patterns-in-java-concepts-hands-on-projects/",
      },
      author: {
        name: "Coffee Powered Crew",
      },
      platform: {
        logoSrc: "/img/courses/udemy.png",
      },
      dateOfCompletion: `${t("month.oct")} 2022`,
    },
    {
      id: "ReactHooks",
      course: {
        name: "React Hooks",
        url: "https://www.linkedin.com/learning/react-hooks",
      },
      author: {
        name: "Eve Porcello",
      },
      platform: {
        logoSrc: "/img/courses/linkedinlearning.png",
      },
      dateOfCompletion: `${t("month.feb")} 2021`,
    },
  ];

  return (
    <CoursesContainer>
      {coursesData.map((course) => (
        <CourseCard key={course.id} courseCard={course} />
      ))}
    </CoursesContainer>
  );
}

export default Courses;
