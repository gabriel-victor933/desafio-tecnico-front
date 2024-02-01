import Button from "../components/Button"
import CircularButton from "../components/CircularButton"
import { IoPersonOutline } from "react-icons/io5";


function HomePage() {
  return (
    <div style={{padding: "10px"}}>

      <Button>
        Assinar Newsletter
      </Button>

      <div>asas</div>
      <CircularButton><IoPersonOutline className="icon"/></CircularButton>
      <CircularButton disabled ><IoPersonOutline className="icon"/></CircularButton>

    </div>
  )
}

export default HomePage