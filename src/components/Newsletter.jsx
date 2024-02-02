import SplitableFlexContainer from "../styles/SplitableFlexContainer"
import NewsletterForms from "./NewsletterForms"
import NewsletterShowcase from "./NewsletterShowcase"

function Newsletter() {
  return (
    <SplitableFlexContainer>
      <NewsletterForms />
      <NewsletterShowcase />
    </SplitableFlexContainer>
  )
}

export default Newsletter