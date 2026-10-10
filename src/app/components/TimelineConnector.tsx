import styled from "styled-components";

export const TimelineConnector = styled.div`
    position: relative;
    width: 2px;
    height: 48px;
    margin: 0 auto;

    background: repeating-linear-gradient(
            to top,
            ${(props) => props.theme.accentColor} 0px,
            ${(props) => props.theme.accentColor} 5px,
            transparent 5px,
            transparent 10px
    );
    opacity: 0.9;

    filter: drop-shadow(
            0px 0px 6px ${(props) => `${props.theme.accentColor}cc`}
    );

    &::after {
        content: "";
        position: absolute;
        top: -4px;
        left: 50%;
        transform: translateX(-50%) rotate(-135deg);
        width: 8px;
        height: 8px;
        border-right: 2px solid ${(props) => props.theme.accentColor};
        border-bottom: 2px solid ${(props) => props.theme.accentColor};
    }
`;