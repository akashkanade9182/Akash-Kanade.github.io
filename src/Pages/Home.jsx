import "./Home.css"
import akashpic from "./akashpic.svg"
import Typer from "../Components/Typer"
import Card from "../Components/Card"
const Home =()=>{
    return (
             <div className="bodybox">
              <Typer/>
              <div>
                <img  className="pic" width="200px" src="./akashpic.svg" alt="" />
              </div>
              {/* <Card/> */}
           {/* <div className="card"></div> */}
             </div>

  
          

        
    )
}
export default Home;