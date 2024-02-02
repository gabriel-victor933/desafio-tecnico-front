import styled from "styled-components";
import FlexContainer from "../styles/FlexContainer"
import TextContainer from "../styles/TextContainer"
import SmallTextContainer from "../styles/SmallTextContainer"
import BigTextContainer from "../styles/BigTextContainer"
import CoverImage from "./CoverImage";

const SmallText = styled(SmallTextContainer)`
  padding-bottom: var(--spacing-stack-xl);
`

const BigText = styled(BigTextContainer)`
  padding-bottom: var(--spacing-stack-md);
  @media (max-width: 1280px) {
      padding-bottom: var(--spacing-stack-xs);
    }
`

const Text = styled(TextContainer)`
  @media (max-width: 1024px) {
      padding-bottom: var(--spacing-stack-xxl);
    }
`

function Cover() {
  return (
    <FlexContainer>
        <div>
          <SmallText >
            Prazer, Soma Igma
          </SmallText>
          <BigText >
            Acreditamos em um mundo onde experiências incríveis são essenciais.
          </BigText>
          <Text>
            Unimos design e tecnologia para resolver problemas complexos de empresas. 
            Criamos produtos digitais que revolucionam o relacionamento entre empresas e consumidores. 
          </Text>
        </div>
        <CoverImage />
    </FlexContainer>
  )
}

export default Cover