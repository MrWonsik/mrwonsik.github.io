import styled from "styled-components";
import { device } from "../../../const";

const getLogoMaxWidth = (distance = 0) => {
  if (distance < 150) {
    return "160px";
  }

  if (distance < 300) {
    return "130px";
  }

  return "100px";
};

const getLogoMaxHeight = (distance = 0) => {
  if (distance < 150) {
    return "100px";
  }

  if (distance < 300) {
    return "80px";
  }

  return "60px";
};

export const TechOrbit = styled.div`
    position: relative;
    width: min(760px, 92vw);
    aspect-ratio: 1;
    margin: 45px auto 20px;

    @media ${device.tablet} {
        width: 100%;
        aspect-ratio: auto;
        display: grid;
        grid-template-columns: repeat(3, minmax(80px, 1fr));
        gap: 24px 18px;
        margin-top: 35px;
    }
`;

export const TechOrbitItem = styled.div<{
  $angle: number;
  $distance?: number;
}>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform:
    rotate(${(props) => props.$angle}deg)
    translate(${(props) => props.$distance}px)
    rotate(-${(props) => props.$angle}deg)
    translate(-50%, -50%);
  display: grid;
  place-items: center;
  filter: ${(props) =>
            props.theme.showFilterDropShadow
              ? `drop-shadow(0px 0px 120px ${props.theme.accentColor})`
              : "none"};

  img {
      width: 100%;
      max-width: ${(props) => getLogoMaxWidth(props.$distance)};
      max-height: ${(props) => getLogoMaxHeight(props.$distance)};
      object-fit: contain;
  }

  @media ${device.tablet} {
    position: static;
    transform: none;
  }
`;