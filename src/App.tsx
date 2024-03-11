import React from "react";
import { useTranslation } from "react-i18next";
import Section from "./app/section/Section";
import AboutMe from "./app/section/aboutme/AboutMe";
import Portfolio from "./app/section/Portfolio";
import Courses from "./app/section/courses/Courses";
import PersonalCard from "./app/section/aboutme/PersonalCard";
import styled from "styled-components";
import Navigation from "./app/navigation/Navigation";
import { SectionDefinition } from "./types";
import EmploymentHistory from "./app/section/employmenthistory/EmploymentHistory";
import Education from "./app/section/education/Education";
import { IoIosPerson } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { BsBuildingsFill } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import { IoBrush } from "react-icons/io5";

const AppRoot = styled.div`
  background-color: ${(props) => props.theme.mainColor};
`;

const AppContainer = styled.div`
  max-width: 1500px;
  margin: auto;
`;

const NavigationContainer = styled.div`
  max-width: 1500px;
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.mainColor};
`;

const MainContainerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

function App() {
  const { t } = useTranslation();

  const sections: Array<SectionDefinition> = [
    {
      id: "about",
      header: t("app.aboutMeHeader"),
      displayHeader: false,
      component: <AboutMe />,
      icon: <IoIosPerson />,
    },
    {
      id: "courses",
      header: t("app.coursesHeader"),
      displayHeader: true,
      component: <Courses />,
      icon: <IoBookSharp />,
    },
    {
      id: "employment-history",
      header: t("app.employmentHistoryHeader"),
      displayHeader: true,
      component: <EmploymentHistory />,
      icon: <BsBuildingsFill />,
    },
    {
      id: "education",
      header: t("app.educationHeader"),
      displayHeader: true,
      component: <Education />,
      icon: <GiGraduateCap />,
    },
    {
      id: "portfolio",
      header: t("app.portfolioHeader"),
      displayHeader: true,
      component: <Portfolio />,
      icon: <IoBrush />,
    },
  ];

  return (
    <AppRoot>
      <AppContainer id={"about"}>
        <NavigationContainer>
          <Navigation sectionsList={sections} />
        </NavigationContainer>
        <MainContainerContainer>
          {sections.map((section) => (
            <Section
              key={section.id}
              id={section.id}
              displayHeader={section.displayHeader}
              header={section.header}
              component={section.component}
              mobileIcon={section.icon}
            />
          ))}
        </MainContainerContainer>
      </AppContainer>
    </AppRoot>
  );
}

export default App;
