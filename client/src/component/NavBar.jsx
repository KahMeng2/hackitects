import { Form, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">
                <button>
                    <span>User Profile</span>
                </button>
                <span style={{color:"lightcoral", fontFamily: "Lilita One", fontSize: 80}}>
                    underCOOK'D
                </span>
            </NavLink>
        </nav>
    )
}

export default Navbar