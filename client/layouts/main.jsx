import {Outlet, useLoaderData} from "react-router-dom"
import img from "../src/assets/banner.webp"

// Components
import Navbar from "../src/component/NavBar"
import Banner from "../src/component/Banner"
import Scroll  from "../src/component/Scroll"
import ReturnHomeButton from "../src/component/ReturnHomeButton"

const Main = () => {
    console.log("something")
        return (
            <div>
                <Navbar/>
                <main style={{backgroundColor:"var(--linen)"}}>
                    <Outlet/>
                </main>
            </div>
    )
}

export default Main


