import styled from "styled-components";

const FooterContainer = styled.footer`
    width: 100%;
    padding: var(--spacing-stack-sm) 137px var(--spacing-stack-xxxl) 137px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1440px) {
        padding: var(--spacing-stack-sm) 109px var(--spacing-stack-xxl)  109px;

    }

    @media (max-width: 1280px) {
        padding: var(--spacing-stack-xxl) var(--spacing-stack-xl) var(--spacing-stack-xxl) var(--spacing-stack-xl);
    }

    @media (max-width: 1024px) {
        padding: var(--spacing-stack-xxs) var(--spacing-stack-xxs) var(--spacing-stack-xxl) var(--spacing-stack-xxs);
        flex-direction: column;
        gap: var(--spacing-stack-nano)
    }

`

export default FooterContainer