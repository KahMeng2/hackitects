import {Outlet, useLoaderData} from "react-router-dom"
import img from "../src/assets/banner.webp"

// Components
import Navbar from "../src/component/NavBar"
import Banner from "../src/component/Banner"

const Main = () => {
    console.log("something")
        return (
            <div>
                <Navbar/>
                <main>
                    <Outlet/>
                </main>
            </div>
    )
}

export default Main


