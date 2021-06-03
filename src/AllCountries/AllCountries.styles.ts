import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card {
        min-height: 24.5em;
        width: 25em;
        margin: auto;
    }
    .card2 {
        min-height: 24.5em;
        width: 25em;
        margin: 50px;
    }

    .input {
        margin-bottom: 2em;
        align-self: center;
    }

    .media {
        height: 250px;
    }
`;