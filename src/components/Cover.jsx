import FadeinFlexContainer from "../styles/FadeinFlexContainer"
import CoverImage from "./CoverImage";
import CoverTitle from "./CoverTitle";

function Cover() {
  return (
    <FadeinFlexContainer>
        <CoverTitle />
        <CoverImage />
    </FadeinFlexContainer>
  )
}

export default Cover