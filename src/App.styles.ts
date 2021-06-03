import styled from "styled-components";
import background from "./background.jpg";

export const Wrapper = styled.div`
    font-family: Roboto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${background});
    background-repeat: round;
    padding-bottom: 50px;

    .logo {
        max-height: 10rem;
        margin: 2rem;
    }
`;