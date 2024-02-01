import styled from "styled-components"

const InputText = styled.input`
    height: 64px;
    color: var(--color-base-dark-highlight);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-medium);
    font-family: var(--font-family-base);
    line-height: var(--line-height-xl);
    border: none;
    border-bottom: 2px solid var(--color-base-dark-highlight);
    vertical-align: middle;

    &:focus{
        border: 1px solid var(--color-primary-light);
        border-bottom: 3px solid var(--color-base-dark-highlight);
        outline: none;
    }

    &:hover {
        border-bottom: 3px solid var(--color-base-dark-highlight);
    }   

    &:active {
        font-weight: var(--font-weight-semibold);
        border: none;
        border-bottom: 3px solid var(--color-base-dark-highlight);
        }

    &:disabled {
        border-color: var(--color-base-dark-disable);
        color: var(--color-base-light-secondary);
        cursor: not-allowed;
    }

    &:invalid {
        border: none;
        border-bottom: 2px solid var(--color-error-main);
        color: var(--color-error-dark);
        font-size: var(--font-size-xxxs);
        line-height: var(--line-height-lg);
    }

    @media (max-width: 1280px) {
        height: 56px;
        font-size: var(--font-size-xs);
    }

`

export default InputText

