import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 95vw;
  padding: var(--spacing-stack-sm) 0 var(--spacing-stack-xxxl) 0;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--color-base-dark-highlight);

  @media (max-width: 1440px) {
    padding: var(--spacing-stack-sm) 0 var(--spacing-stack-xxl) 0;
  }

  @media (max-width: 1280px) {
    padding: var(--spacing-stack-xxl) 0 var(--spacing-stack-xxl) 0;
  }

  @media (max-width: 1024px) {
    width: 90vw;
    padding: var(--spacing-stack-xxs) 0 var(--spacing-stack-xxl) 0;
    flex-direction: column;
    gap: var(--spacing-stack-nano);
  }
`;

export default FooterContainer;
