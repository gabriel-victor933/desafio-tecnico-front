import FlexContainer from "../styles/FlexContainer"
import CoverImage from "./CoverImage";
import CoverTitle from "./CoverTitle";

function Cover() {
  return (
    <FlexContainer>
        <CoverTitle />
        <CoverImage />
    </FlexContainer>
  )
}

export default Cover