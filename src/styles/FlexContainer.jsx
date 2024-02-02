import styled from "styled-components";

const FlexContainer = styled.div`
    height: 900px;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: stretch;
    padding: var(--spacing-stack-xxxl) 137px 0 137px;

    div {
        width: 50%;
    }
    
    @media (max-width: 1440px) {
        background-color: yellow;
        height: 800px;
        padding: var(--spacing-stack-xxxl) 109px 0 109px;

    }

    @media (max-width: 1280px) {
        background-color: blue;
        height: 584px;
        padding: 0px;
        padding: var(--spacing-stack-xxl) var(--spacing-stack-xl) 0 var(--spacing-stack-xl);
    }

    @media (max-width: 1024px) {
        background-color: pink; 
        padding: var(--spacing-stack-xxs) var(--spacing-stack-xxs) 0 var(--spacing-stack-xxs);
        gap: var(--spacing-stack-xxl);
        flex-direction: column;
        height: auto;

        div {
        width: 100%;
    }
    }
`

export default FlexContainer;