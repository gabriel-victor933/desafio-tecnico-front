import celular1 from "../assets/images/celular1.png"
import celular2 from "../assets/images/celular2.png"
import celular3 from "../assets/images/celular3.png"
import celular4 from "../assets/images/celular4.png"
import celular5 from "../assets/images/celular5.png"
import celular6 from "../assets/images/celular6.png"
import celular7 from "../assets/images/celular7.png"
import celular8 from "../assets/images/celular8.png"
import celular9 from "../assets/images/celular9.png"
import celular10 from "../assets/images/celular10.png"
import celular11 from "../assets/images/celular11.png"
import celular12 from "../assets/images/celular12.png"
import Showcase from "../styles/Showcase"
import ShowcaseImage from "../styles/ShowcaseImage"
import ShowcaseImagemobile from "../styles/ShowcaseImageMobile"

function NewsletterShowcase() {
  return (
    <Showcase>
      <div className="desktop">
        <ShowcaseImage src={celular1} />
        <ShowcaseImage src={celular2} />
        <ShowcaseImage src={celular3} />
      </div>
      <div className="desktop">
        <ShowcaseImage src={celular4} />
        <ShowcaseImage src={celular5} />
        <ShowcaseImage src={celular6} />
      </div>
      <div className="desktop">
        <ShowcaseImage src={celular7} />
        <ShowcaseImage src={celular8} />
        <ShowcaseImage src={celular9} />
      </div>
      <div className="desktop">
        <ShowcaseImage src={celular10} />
        <ShowcaseImage src={celular11} />
        <ShowcaseImage src={celular12} />
      </div>
      <div className="mobile">
        <ShowcaseImagemobile src={celular2}/>
        <ShowcaseImagemobile src={celular5} />
        <ShowcaseImagemobile src={celular8} />
        <ShowcaseImagemobile src={celular2}/>
        <ShowcaseImagemobile src={celular5} />
        <ShowcaseImagemobile src={celular8} />
      </div>
    </Showcase>
  )
}

export default NewsletterShowcase