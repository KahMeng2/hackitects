import { Form, NavLink, Navigate, useNavigate, Link } from "react-router-dom"
import Icon from '@mdi/react';
import { mdiAccountCircle } from '@mdi/js';

const Navbar = () => {
    return (
        <header style={{display: "flex", alignItems: "center", 
        justifyContent: "space-between", backgroundColor: "#BEC9C0", width:'100%', paddingTop:"5px", paddingBottom:"5px"}}>
            <span style={{color:"#688D84", fontFamily: "Lilita One", fontSize: 32, marginLeft:"70px"}}>
                underCOOK'D
            </span>
            <NavLink to="/" style={{marginRight: "70px"}}>
                <Icon path={mdiAccountCircle} size={2} color={"#688D84"} className="usericon"/>
            </NavLink>
        </header>
    )
}

export default Navbar
