import React from "react";
import { useTranslation } from "react-i18next";
import { CourseInfo } from "./CourseInfo";
import styled from "styled-components";
import { useThemeContext } from "../../../main";

const CardContainer = styled.a`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 14px;
    text-decoration: none;
    border: 1px solid #cccccc50;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    overflow: hidden;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.45);
        border-color: ${(props) => props.theme.accentColor};
    }
`;

const HeaderRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
`;

const CourseLogo = styled.div`
    height: 48px;
    display: flex;

    img {
        max-height: 100%;
        max-width: 170px;
        object-fit: contain;
        filter: ${(props) => props.theme.showFilterDropShadow ? `drop-shadow(0px 0px 50px ${props.theme.accentColor}85)` : "none"};
    }
    
    .invert {
        filter: invert(1);
    }
`;

const StatusBadge = styled.span<{ $inProgress?: boolean }>`
    font-size: 0.85rem;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 20px;
    white-space: nowrap;
    background-color: ${(props) =>
            props.$inProgress
                    ? "#476bfd10"
                    : "#00772710"};
    color: ${(props) =>
            props.$inProgress
                    ? "#476bfd"
                    : "#007727"};
`;

const CourseTitle = styled.h3`
    font-size: 25px;
    margin: 0 0 12px 0;
    line-height: 1.35;
    color: ${(props) => props.theme.textColor};
    word-break: break-word;
`;

const MetaInfo = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 20px;
    color: ${(props) => props.theme.textColor};
    opacity: 0.85;
    margin-bottom: 20px;
    line-height: 1.4;
`;

const PlatformLogo = styled.img`
    max-height: 34px;
    max-width: 120px;
    width: auto;
    height: auto;
    margin-left: 6px;
    vertical-align: middle;
    filter: ${(props) => props.theme.showFilterDropShadow ? `drop-shadow(0px 0px 25px ${props.theme.accentColor})` : "none"};
`;

const CardFooter = styled.div`
    margin-top: auto;
    padding-top: 16px;
    border-top: 1px solid #cccccc50;
    display: flex;
    justify-content: flex-end;
`;

const DetailsLink = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.accentColor};

    ${CardContainer}:hover & {
        filter: drop-shadow(0px 0px 5px ${(props) => `${props.theme.accentColor}50`});
    }
`;

function CourseCard({ courseCard }: { courseCard: CourseInfo }) {
  const { t } = useTranslation();
  const { isDarkMode } = useThemeContext();

  const completionDate = courseCard?.completionDate;
  const formattedDate = completionDate
    ? `${t(completionDate.month)} ${completionDate.year}`
    : t("courses.inProgress");

  return (
    <CardContainer href={courseCard.course.url} target="_blank" rel="noopener noreferrer">
      <HeaderRow>
        <CourseLogo>
          {(courseCard.course.logoSrc || courseCard.course.logoWhiteSrc) && (
            <img
              src={isDarkMode ? (courseCard.course.logoWhiteSrc || courseCard.course.logoSrc) : courseCard.course.logoSrc}
              alt={courseCard.course.name || "Course Logo"}
              className={(courseCard.course.logoWhite && !isDarkMode) ? "invert" : ""}
            />
          )}
        </CourseLogo>

        <StatusBadge $inProgress={!completionDate}>
          {formattedDate}
        </StatusBadge>
      </HeaderRow>

      <CourseTitle>{courseCard.course.name}</CourseTitle>

      <MetaInfo>
        {courseCard.author?.name && <span>{courseCard.author.name}</span>}
        {courseCard.author?.name && courseCard.platform && <span>•</span>}
        {courseCard.platform && (
          <span>
            {courseCard.platform.name}
            {courseCard.platform.logoSrc && (
              <PlatformLogo src={courseCard.platform.logoSrc} alt={courseCard.platform.name} />
            )}
          </span>
        )}
      </MetaInfo>

      <CardFooter>
        <DetailsLink>
          {t("courses.courseDetails")} &rarr;
        </DetailsLink>
      </CardFooter>
    </CardContainer>
  );
}

export default CourseCard;