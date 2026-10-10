import React from "react";
import { Trans } from "react-i18next";
import styled from "styled-components";

const Highlight = styled.span`
  color: ${(props) => props.theme.accentColor};
  font-weight: 600;
`;

interface AppTranslationProps {
  translationKey: string;
}

export const AppTranslation: React.FC<AppTranslationProps> = ({ translationKey }) => (
  <Trans
    i18nKey={translationKey}
    components={{
      Highlight: <Highlight />,
      strong: <strong />,
    }}
  />
);