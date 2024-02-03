import styled from 'styled-components';
import SplitableFlexContainer from '../styles/SplitableFlexContainer';
import TextContainer from '../styles/TextContainer';
import CompaniesBlock from './CompaniesBlock';

const Container = styled(SplitableFlexContainer)`
  @media (max-width: 1280px) {
    padding-top: var(--spacing-stack-xxl);
  }
`;

function Companies() {
  return (
    <Container>
      <div>
        <TextContainer>
          Expressamos mais de 20 anos de experiência criando plataformas
          digitais para as maiores empresas do Brasil, impactando milhões de
          pessoas.
        </TextContainer>
      </div>
      <CompaniesBlock />
    </Container>
  );
}

export default Companies;
