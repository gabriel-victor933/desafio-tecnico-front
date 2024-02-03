import FormsContainer from '../styles/FormsContainer';
import SmallTextContainer from '../styles/SmallTextContainer';
import TextContainer from '../styles/TextContainer';
import InputText from '../styles/InputText';
import Button from '../styles/Button';
import styled from 'styled-components';

const SmallText = styled(SmallTextContainer)`
  padding-bottom: var(--spacing-stack-md);
  width: 100%;
`;

const Text = styled(TextContainer)`
  padding-bottom: var(--spacing-stack-md);
  width: 100%;
`;

function NewsletterForms() {
  return (
    <FormsContainer>
      <SmallText>Assine nossa newsletter</SmallText>
      <Text>
        Desenvolva-se conosco com conteúdos sobre Tecnologia e Design a cada 15
        dias.
      </Text>
      <form>
        <InputText placeholder="Nome" />
        <InputText placeholder="Email" />
        <Button>Assinar Newsletter</Button>
      </form>
    </FormsContainer>
  );
}

export default NewsletterForms;
