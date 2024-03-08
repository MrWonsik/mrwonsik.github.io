import React from "react";
import { useTranslation } from "react-i18next";
import { CourseInfo } from "./CourseInfo";
import styled from "styled-components";

const CourseCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  max-width: 350px;
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

const CourseCardUrlContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CourseCardImgContainer = styled.div`
  max-width: 300px;
  max-height: 300px;
  align-self: center;
  & img {
    max-width: 300px;
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
  cursor: pointer;

  &:hover {
    color: blue;
  }
`;

function CourseCard({ courseCard }: { courseCard: CourseInfo }) {
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
      {courseCard?.course?.url && (
        <CourseCardUrlContainer>
          <CourseCardUrl href={courseCard.course.url}>
            {t("courses.courseDetails")}
          </CourseCardUrl>
        </CourseCardUrlContainer>
      )}
    </CourseCardContainer>
  );
}

export default CourseCard;
