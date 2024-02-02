import styled from "styled-components";



const FlexContainer = styled.section`
    height: 900px;
    width: 95vw;
    display: flex;
    flex-direction: row-reverse;
    align-items: stretch;
    padding: var(--spacing-stack-xxxl) 137px 0 137px;


    div {
        width: 50%;
    }
    
    @media (max-width: 1440px) {
        height: 800px;
        padding: var(--spacing-stack-xxxl) 109px 0 109px;

    }

    @media (max-width: 1280px) {
        height: 584px;
        padding: var(--spacing-stack-xxl) var(--spacing-stack-xl) 0 var(--spacing-stack-xl);
    }

    @media (max-width: 1024px) {
        padding: var(--spacing-stack-xxs) 0 0 0;
        gap: var(--spacing-stack-xxl);
        flex-direction: column;
        height: auto;
        width: 90vw;

        div {
        width: 100%;
        }
    }

`

export default FlexContainer;