import {Button} from "../components/Button"

function HomePage() {
  return (
    <div style={{padding: "10px"}}>

      <Button>
        <p>Assinar Newsletter</p>
      </Button>
      <div></div>
      <Button disabled>
        <p>Assinar Newsletter</p>
      </Button>
    </div>
  )
}

export default HomePage