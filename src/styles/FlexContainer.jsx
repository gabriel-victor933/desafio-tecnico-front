import styled from "styled-components";

const FlexContainer = styled.div`
    height: 900px;
    display: flex;
    flex-direction: row-reverse;
    align-items: stretch;
    margin: 0px 137px;
    
    @media (max-width: 1440px) {
        background-color: yellow;
        height: 800px;
        margin: 0px 109px;

    }

    @media (max-width: 1280px) {
        background-color: blue;
        height: 504px;
        padding: 0px;
        padding-top: var(--spacing-stack-xxl);
        margin: 0px 80px;
    }

    @media (max-width: 1024px) {
        background-color: pink; 
        margin: 0px;
        padding: 0px;
        padding-top: var(--spacing-stack-xxs);
        flex-direction: column;
    }
`

export default FlexContainer;