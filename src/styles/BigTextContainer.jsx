import styled from 'styled-components';
import TextContainer from './TextContainer';

const BigTextContainer = styled(TextContainer)`
  font-size: var(--font-size-xxl);
  line-height: var(--line-height-sm);

  @media (max-width: 1440px) {
    font-size: var(--font-size-xl);
  }

  @media (max-width: 1280px) {
    font-size: var(--font-size-lg);
  }
`;

export default BigTextContainer;
