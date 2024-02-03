import styled from 'styled-components';

const CircularButton = styled.button`
  height: 48px;
  width: 48px;
  vertical-align: middle;
  border-radius: var(--border-radius-pill);
  background-color: var(--color-primary-main);
  border: none;
  transition-delay: 0s;
  transition-timing-function: linear;
  transition-duration: 2s;

  .icon {
    font-size: 24px;
    color: var(--color-primary-contrast);
  }

  &:focus {
    border: var(--border-width-thin) solid var(--color-primary-contrast);
    background-color: var(--color-primary-light);
  }

  &:hover {
    background-color: var(--color-primary-light);
    transition-delay: 0s;
    transition-timing-function: linear;
    transition-duration: 0s;
  }

  &:active {
    background-color: var(--color-primary-dark);
    border: none;
  }

  &:disabled {
    background-color: var(--color-base-dark-disable);
    cursor: not-allowed;

    .icon {
      color: var(--color-base-dark-secondary);
    }
  }

  @media (max-width: 1280px) {
    height: 40px;
    width: 40px;
  }
`;

export default CircularButton;
