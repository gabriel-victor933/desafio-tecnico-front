import styled from "styled-components";
import TextContainer from "../styles/TextContainer"
import SmallTextContainer from "../styles/SmallTextContainer"
import BigTextContainer from "../styles/BigTextContainer"
import Logo from "../styles/Logo"
import logo from "../assets/images/logotipoIgma.svg"

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

function CoverTitle() {
    return (
        <div>
            <SmallText >
                Prazer, Somos <Logo src={logo}/>
            </SmallText>
            <BigText >
                Acreditamos em um mundo onde experiências incríveis são essenciais.
            </BigText>
            <Text>
                Unimos design e tecnologia para resolver problemas complexos de empresas.
                Criamos produtos digitais que revolucionam o relacionamento entre empresas e consumidores.
            </Text>
        </div>
    )
}

export default CoverTitle