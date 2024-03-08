import styled from "styled-components";

export const HorizontalLine = styled.div<{
  width: string;
  boxShadowStyle: string;
}>`
  width: ${(props) => props.width};
  height: 0;
  border: 5px solid transparent;
  box-shadow: ${(props) => props.boxShadowStyle}
  margin: 10px 0;
`;
