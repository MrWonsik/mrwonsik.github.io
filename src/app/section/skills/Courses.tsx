import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const CoursesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  justify-content: space-evenly;
`;

const CourseCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 25px;
  border-radius: 10px;
  box-shadow:
    rgba(3, 48, 131, 0.4) -5px 5px,
    rgba(3, 48, 131, 0.3) -10px 10px,
    rgba(3, 48, 131, 0.2) -15px 15px,
    rgba(3, 48, 131, 0.1) -20px 20px,
    rgba(3, 48, 131, 0.05) -25px 25px;
`;

const CourseCardSection = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
`;

const CourseCardImgContainer = styled.div`
  max-width: 350px;
  max-height: 350px;
  align-self: center;
  & img {
    max-width: 350px;
    max-height: 350px;
  }
`;
const CourseAuthorCardImgContainer = styled.div`
  margin-left: 10px;
  max-width: 100px;
  max-height: 100px;
  & img {
    max-width: 100px;
    max-height: 100px;
  }
`;

const CourseCardLabel = styled.span`
  font-size: 23px;
  font-weight: bold;
`;

const CourseCardValue = styled.span`
  font-size: 23px;
  margin-left: 10px;
  text-align: center;
`;

const CourseCardUrl = styled.a`
  font-size: 23px;
`;

export interface CourseInfo {
  id: string;
  course: {
    name?: string;
    logoSrc?: string;
    url?: string;
  };
  author?: {
    name?: string;
    logoSrc?: string;
  };
  platform?: {
    name?: string;
    logoSrc?: string;
  };
  dateOfCompletion: string;
}

const CourseCard = ({ courseCard }: { courseCard: CourseInfo }) => {
  const { t } = useTranslation();
  return (
    <CourseCardContainer>
      {courseCard.course.logoSrc && (
        <CourseCardImgContainer>
          <img src={courseCard.course.logoSrc} alt="course logo" />
        </CourseCardImgContainer>
      )}
      {courseCard.course.name && (
        <CourseCardSection>
          <CourseCardLabel>{t("courses.courseNameLabel")}:</CourseCardLabel>
          <CourseCardValue>{courseCard.course.name}</CourseCardValue>
        </CourseCardSection>
      )}
      {courseCard.author && (
        <CourseCardSection>
          <CourseCardLabel>{t("courses.authorNameLabel")}:</CourseCardLabel>
          {courseCard.author?.name && (
            <CourseCardValue>{courseCard.author.name}</CourseCardValue>
          )}
          {courseCard.author?.logoSrc && (
            <CourseAuthorCardImgContainer>
              <img src={courseCard.author.logoSrc} alt="author logo" />
            </CourseAuthorCardImgContainer>
          )}
        </CourseCardSection>
      )}
      {courseCard.platform && (
        <CourseCardSection>
          <CourseCardLabel>{t("courses.platformNameLabel")}:</CourseCardLabel>
          <CourseCardValue>{courseCard.platform.name}</CourseCardValue>
          <CourseAuthorCardImgContainer>
            <img src={courseCard.platform.logoSrc} alt="platform logo" />
          </CourseAuthorCardImgContainer>
        </CourseCardSection>
      )}
      <CourseCardSection>
        <CourseCardLabel>{t("courses.dateOfCompletionLabel")}:</CourseCardLabel>
        <CourseCardValue>{courseCard.dateOfCompletion}</CourseCardValue>
      </CourseCardSection>
      <CourseCardSection>
        <CourseCardUrl href={courseCard.course.url}>
          {courseCard.course.url}
        </CourseCardUrl>
      </CourseCardSection>
    </CourseCardContainer>
  );
};

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
      id: "ReactHooks",
      course: {
        name: "React Hooks",
      },
      platform: {
        logoSrc: "/img/courses/linkedinlearning.png",
      },
      dateOfCompletion: `${t("month.feb")} 2021`,
    },
    {
      id: "ModernProjectsReact",
      course: {
        name: "Bulding Modern Projects with React",
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
