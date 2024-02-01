import styled from "styled-components"

export const Button = styled.button`
    height: 56px;
    min-width: 160px;
    color: var(--color-base-light-contrast);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semibold);
    font-family: var(--font-family-base);
    line-height: var(--line-height-lg);
    padding: 0 var(--spacing-inline-md);
    border: none;
    border-radius: var(--border-radius-none);
    background-color: var(--color-base-dark-highlight);
    cursor: pointer;

    &:focus{
        border: var(--border-width-thin) solid var(--color-primary-main);
        background-color: var(--color-base-dark-main);
        box-sizing: border-box;
    }

    &:hover {
        background-color: var(--color-base-dark-main);
    }   

    &:active {
        background-color: var(--color-base-dark-highlight);
        color: var(--color-base-light-secondary);
        border: none;
    }

    &:disabled {
        background-color: var(--color-base-dark-disable);
        color: var(--color-base-light-secondary);
        cursor: not-allowed;
    }

    @media (max-width: 1280px) {
        height: 48px;
        min-width: 120px;
        font-size: var(--font-size-xxs);
        padding: 0 var(--spacing-inline-sm);
    }
`

