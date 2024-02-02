import SmallTextContainer from "../styles/SmallTextContainer"
import styled from "styled-components"

const FooterText = styled(SmallTextContainer)`
    line-height: var(--line-height-lg);
    @media (max-width: 1440px) {
        font-size: var(--font-size-xs);
    }

    @media (max-width: 1280px) {
        font-size: var(--font-size-xxs);
    }
`

export default FooterText