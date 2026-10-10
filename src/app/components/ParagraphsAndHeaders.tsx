import styled from "styled-components";

export const JustifiedParagraph = styled.p`
  text-align: justify;
`;

export const BoldedParagraph = styled.p`
  font-weight: bold;
  font-size: 25px;
  color: ${(props) => props.theme.accentColor};
`;

export const ItalicParagraph = styled.p`
  font-style: italic;
  font-size: 28px;
`;

export const SecondaryHeader = styled.h2`
  font-size: 60px;
  margin-top: 30px;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.accentColor};
`;

export const ThirdHeader = styled.h3`
  font-size: 40px;
  margin-top: 30px;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.accentColor};
`;