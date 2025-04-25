import React from "react";
import { useTranslation } from "react-i18next";
import { CourseInfo } from "./CourseInfo";
import styled from "styled-components";

const CourseCardContainer = styled.a`
    color: inherit;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    width: 350px;
    padding: 40px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.backgroundColor || '#fff'};
    box-shadow: ${(props) => `
      0 4px 8px rgba(0, 0, 0, 0.1),
      0 8px 16px rgba(0, 0, 0, 0.15);
    `};
    border: 1px solid ${(props) => props.theme.borderColor || '#ddd'};
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: ${(props) => `
          0 10px 20px rgba(0, 0, 0, 0.2),
          0 15px 30px rgba(0, 0, 0, 0.25);
        `};
        cursor: pointer;
    }
`;

const CourseCardSection = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
`;

const CourseCardUrlContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CourseCardImgContainer = styled.div`
  max-width: 300px;
  max-height: 300px;
  margin-bottom: 20px;
  align-self: center;
  & img {
    max-width: 250px;
    max-height: 300px;
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
  font-weight: bold;
`;

const CourseCardValue = styled.span`
  margin-left: 10px;
  text-align: center;
`;

const CourseCardUrl = styled.a`
  color: #171741;

  &:hover {
    color: blue;
  }
`;

function CourseCard({ courseCard }: { courseCard: CourseInfo }) {
  const { t } = useTranslation();
  return (
    <CourseCardContainer href={courseCard.course.url} target="_blank">
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
        <CourseCardValue>
          {
            courseCard.completionDate
              ? `${t(courseCard.completionDate.month)} ${courseCard.completionDate.year}`
              : t("courses.inProgress")
          }
        </CourseCardValue>
      </CourseCardSection>
      {courseCard?.course?.url && (
        <CourseCardUrlContainer>
          <CourseCardUrl href={courseCard.course.url} target="_blank">
            {t("courses.courseDetails")}
          </CourseCardUrl>
        </CourseCardUrlContainer>
      )}
    </CourseCardContainer>
  );
}

export default CourseCard;
