import Button from "../components/Button"
import CircularButton from "../components/CircularButton"
import { IoPersonOutline } from "react-icons/io5";
import InputText from "../components/InputText";


function HomePage() {
  return (
    <div style={{padding: "10px"}}>

      <Button>
        Assinar Newsletter
      </Button>

      <div>asas</div>
      <CircularButton><IoPersonOutline className="icon"/></CircularButton>
      <CircularButton disabled ><IoPersonOutline className="icon"/></CircularButton>
      <div>input</div>
      <InputText />
      <div></div>
      <InputText disabled/>
      <div></div>
      <InputText type="text" required/>
    </div>
  )
}

export default HomePage