import styled from "styled-components";
import FlexContainer from "./FlexContainer";

const SplitableFlexContainer = styled(FlexContainer)`
    flex-direction: row;
    padding: 0px;

    div {
        display: flex;
        align-items: center;
    }

    div:first-child {
        width: 43%;
        background-color: red;
    }

    div:last-child {
        width: 57%;
        background-color: blue;
    }

    @media (max-width: 1440px) {
        padding: 0px;
    }

    @media (max-width: 1280px) {
        padding: 0px;
        padding-bottom: var(--spacing-stack-xxl)
    }

    @media (max-width: 1024px) {
        padding: var(--spacing-stack-xxl) 0 0 0;
        gap: var(--spacing-stack-sm);
        flex-direction: column;
        align-items: center;

        div:first-child, div:last-child {
            width: 100%;
        }
    }
`

export default SplitableFlexContainer;