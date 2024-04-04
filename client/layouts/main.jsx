import {Outlet, useLoaderData} from "react-router-dom"


// Components
import Navbar from "../src/component/NavBar"

const Main = () => {
    console.log("something")
        return (
            <div>
                <Navbar/>
                <div>
                    something
                </div>
                <main>
                    <Outlet/>
                </main>
            </div>
    )
}

export default Main


