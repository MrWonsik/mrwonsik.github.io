import React from "react";
import { useTranslation } from "react-i18next";
import Section from "./component/Section";
import AboutMe from "./section/AboutMe";
import Portfolio from "./section/Portfolio";
import Resume from "./section/Resume";
import LanguageSelector from "./component/LanguageSelector";
import PersonalCard from "./component/PersonalCard";
import styled from "styled-components";

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

const HeaderRoot = styled.div`
  background: ${(props) => props.theme.mainColor};
  position: sticky;
  top: 0;
`;

const HeaderContainer = styled.nav`
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`;

const NavigationLink = styled.a`
  padding: 20px;
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
`;

const MainContainerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  const { t } = useTranslation();
  return (
    <AppRoot>
      <AppContainer>
        <HeaderRoot>
          <HeaderContainer>
            <NavigationLink href={"#about"}>
              {t("app.aboutMeMenuLink")}
            </NavigationLink>
            <NavigationLink href={"#resume"}>
              {t("app.resumeMenuLink")}
            </NavigationLink>
            <NavigationLink href={"#portfolio"}>
              {t("app.portfolioMenuLink")}
            </NavigationLink>
            <LanguageSelector />
          </HeaderContainer>
        </HeaderRoot>
        <MainContainerContainer>
          <div className={"sectionsContainer"}>
            <Section id={"about"} header={"About Me"} component={<AboutMe />} />
            <Section id={"resume"} header={"Resume"} component={<Resume />} />
            <Section
              id={"portfolio"}
              header={"Portfolio"}
              component={<Portfolio />}
            />
          </div>
          <PersonalCard />
        </MainContainerContainer>
      </AppContainer>
    </AppRoot>
  );
}

export default App;
