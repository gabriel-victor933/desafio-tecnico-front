import styled from 'styled-components';

const Logo = styled.img`
  margin-left: var(--spacing-inline-xxxs);
  vertical-align: middle;
  height: 24px;
  @media (max-width: 1440px) {
    height: 16px;
  }

  @media (max-width: 1280px) {
    height: 14px;
    margin-left: var(--spacing-inline-nano);
  }
`;

export default Logo;
