import {Outlet, useLoaderData} from "react-router-dom"
import img from "../src/assets/banner.webp"

// Components
import Navbar from "../src/component/NavBar"
import GenButton from "../src/component/GenButton"

const Main = () => {
    console.log("something")
        return (
            <div>
                <Navbar/>
                <div className="container" style={{position: "relative", display:"flex", justifyContent:"center"}}>
                    <img src={img} style={{objectFit:"cover", width:"100%", height:"400px", filter:"sepia(30%) brightness(80%) contrast(110%)"}}></img>
                    <p style={{position: "absolute", top:"15%", bottom:"50%", color:"white", fontFamily:"Gaegu", fontSize:"70px"}}>
                        Let's get cooking with
                        <div style={{textAlign:"center", fontFamily:"Lilita One"}}>underCOOK'D</div>
                    </p>
                </div>
                
                <div>
                    <GenButton/>
                </div>
                <main>
                    <Outlet/>
                </main>
            </div>
    )
}

export default Main


