import styled from "styled-components";
import TextContainer from "./TextContainer";

const SmallTextContainer = styled(TextContainer)`
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-sm);

    @media (max-width: 1440px) {
        font-size: var(--font-size-xs);
    }

    @media (max-width: 1280px) {
        font-size: var(--font-size-xxs);

    }
`

export default SmallTextContainer;