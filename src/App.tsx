import React from "react";
import { useTranslation } from "react-i18next";
import Section from "./section/Section";
import AboutMe from "./section/AboutMe";
import Portfolio from "./section/Portfolio";
import Skills from "./section/Skills";
import PersonalCard from "./navigation/PersonalCard";
import styled from "styled-components";
import Navigation from "./navigation/Navigation";
import { SectionDefinition } from "./types";
import EmploymentHistory from "./section/EmploymentHistory";
import Education from "./section/Education";
import { IoIosPerson } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { BsBuildingsFill } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import { IoBrush } from "react-icons/io5";

//A contact page with your contact information, including email address, phone number, LinkedIn profile, GitHub profile, or other social media profiles.
//You can also include a contact form for visitors to send you messages directly from your website.

const AppRoot = styled.div`
  background-color: ${(props) => props.theme.mainColor};
`;

const AppContainer = styled.div`
  max-width: 1024px;
  margin: auto;
`;

const NavigationContainer = styled.div`
  max-width: 1024px;
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.mainColor};
`;

const MainContainerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
`;

function App() {
  const { t } = useTranslation();

  const sections: Array<SectionDefinition> = [
    {
      id: "about",
      header: t("app.aboutMeHeader"),
      component: <AboutMe />,
      icon: <IoIosPerson />,
    },
    {
      id: "skills",
      header: t("app.skillsHeader"),
      component: <Skills />,
      icon: <IoBookSharp />,
    },
    {
      id: "employment-history",
      header: t("app.employmentHistoryHeader"),
      component: <EmploymentHistory />,
      icon: <BsBuildingsFill />,
    },
    {
      id: "education",
      header: t("app.educationHeader"),
      component: <Education />,
      icon: <GiGraduateCap />,
    },
    {
      id: "portfolio",
      header: t("app.portfolioHeader"),
      component: <Portfolio />,
      icon: <IoBrush />,
    },
  ];

  return (
    <AppRoot>
      <AppContainer>
        <NavigationContainer>
          <Navigation sectionsList={sections} />
        </NavigationContainer>
        <MainContainerContainer>
          <PersonalCard />
          {sections.map((section) => (
            <Section
              key={section.id}
              id={section.id}
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
