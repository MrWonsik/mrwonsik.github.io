import styled from "styled-components";

export const SvgContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: wrap;
  padding: 25px 0;
    filter: ${(props) => props.theme.showFilterDropShadow ? `drop-shadow(0px 0px 150px ${props.theme.accentColor})` : "none"};
`;

export const Svg = styled.img`
  max-width: 180px;
  max-height: 100px;
  padding: 10px;
`;
