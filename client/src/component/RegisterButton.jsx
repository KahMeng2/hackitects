import { Form, NavLink, Navigate, useNavigate, Link, useLocation } from "react-router-dom"

const RegisButton = () =>{
    return (
            <NavLink to={"/"}>
                <button style={{fontFamily:"Comfortaa", backgroundColor:"#688D84", borderRadius:"5px", padding:"5px 30px"}}>
                    REGISTER
                </button>
            </NavLink>
    )
}

export default RegisButton