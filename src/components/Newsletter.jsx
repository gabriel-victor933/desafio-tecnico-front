import SplitableFlexContainer from '../styles/SplitableFlexContainer';
import NewsletterForms from './NewsletterForms';
import NewsletterShowcase from './NewsletterShowcase';
import styled from 'styled-components';

const Container = styled(SplitableFlexContainer)`
  padding-bottom: var(--spacing-stack-xxxl);
  @media (max-width: 1280px) {
    padding-bottom: var(--spacing-stack-xxl);
  }
`;

function Newsletter() {
  return (
    <Container>
      <NewsletterForms />
      <NewsletterShowcase />
    </Container>
  );
}

export default Newsletter;
