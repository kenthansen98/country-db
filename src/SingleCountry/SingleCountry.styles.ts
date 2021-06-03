import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 2rem;
    }

    img {
        max-height: 18rem;
    }

    .select {
        margin-bottom: 25px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;

    .table {
        margin-top: 50px;
        margin-bottom: 50px;
        align-self: center;
        width: 600px;
    }

    .borders {
        /* height: 100px; */
        width: 300px;
        /* margin: 50px; */
        padding: 25px;
        align-self: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    .buttons {
        height: 40px;
        margin-top: 5px;
    }
`;

export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 100px;
    margin-bottom: 100px;
    margin-left: 75px;
`;