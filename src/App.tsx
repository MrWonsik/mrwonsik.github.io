import React from "react";
import { useTranslation } from "react-i18next";
import Section from "./section/Section";
import AboutMe from "./section/AboutMe";
import Portfolio from "./section/Portfolio";
import Technologies from "./section/Technologies";
import PersonalCard from "./navigation/PersonalCard";
import styled from "styled-components";
import NavigationCard from "./navigation/NavigationCard";
import { SectionDefinition } from "./types";
import EmploymentHistory from "./section/EmploymentHistory";

//A contact page with your contact information, including email address, phone number, LinkedIn profile, GitHub profile, or other social media profiles.
//You can also include a contact form for visitors to send you messages directly from your website.

const AppRoot = styled.div`
  background-color: ${(props) => props.theme.mainColor};
`;

const AppContainer = styled.div`
  max-width: 1024px;
  padding: 20px;
  margin: auto;
`;

const MainContainerContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const FixedColumn = styled(Column)`
  position: sticky;
  top: 20px;
  right: 0;
  gap: 30px;
`;

function App() {
  const { t } = useTranslation();

  const sections: Array<SectionDefinition> = [
    {
      id: "about",
      header: t("app.aboutMeHeader"),
      component: <AboutMe />,
    },
    {
      id: "technologies",
      header: t("app.technologiesHeader"),
      component: <Technologies />,
    },
    {
      id: "employment-history",
      header: t("app.employmentHistoryHeader"),
      component: <EmploymentHistory />,
    },
    {
      id: "portfolio",
      header: t("app.portfolioHeader"),
      component: <Portfolio />,
    },
  ];

  return (
    <AppRoot>
      <AppContainer>
        <MainContainerContainer>
          <Column>
            {sections.map((section) => (
              <Section
                key={section.id}
                id={section.id}
                header={section.header}
                component={section.component}
              />
            ))}
          </Column>
          <div>
            <FixedColumn>
              <PersonalCard />
              <NavigationCard sectionsList={sections} />
            </FixedColumn>
          </div>
        </MainContainerContainer>
      </AppContainer>
    </AppRoot>
  );
}

export default App;
