import { Form, NavLink, Navigate, useNavigate, Link, useLocation } from "react-router-dom"

const RegisButton = () =>{

    const location = useLocation();

    if (location.pathname === '/signup'){
        return (
                <NavLink to={"/dashboard"}>
                    <button style={{fontFamily:"Comfortaa", backgroundColor:"#688D84", borderRadius:"5px", padding:"5px 30px"}}>
                        REGISTER
                    </button>
                </NavLink>
        )
    }
    else if (location.pathname === '/login'){
        return (
            <NavLink to={"/dashboard"}>
                <button style={{fontFamily:"Comfortaa", backgroundColor:"#7090A8", borderRadius:"5px", padding:"5px 30px"}}>
                    REGISTER
                </button>
            </NavLink>
    )
    }
}

export default RegisButton