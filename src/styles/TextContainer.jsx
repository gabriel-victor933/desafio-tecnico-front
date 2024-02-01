import styled from "styled-components";

const TextContainer = styled.p`
    font-family: var(--font-family-base);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-lg);
    text-align: left;
    color: var(--color-base-dark-main);

    @media (max-width: 1440px) {
        font-size: var(--font-size-md);
    }

    @media (max-width: 1280px) {
        font-size: var(--font-size-xs);

    }

`

export default TextContainer;