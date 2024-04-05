import { Form, NavLink, Navigate, useNavigate, Link } from "react-router-dom"
import Icon from '@mdi/react';
import { mdiAccountCircle } from '@mdi/js';

const Navbar = () => {
    return (
        <header className="container" style={{display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "#BEC9C0", maxWidth: "1500px", paddingTop:"20px", paddingBottom:"20px"}}>
            <span style={{color:"#688D84", fontFamily: "Lilita One", fontSize: 40, marginLeft:"70px"}}>
                underCOOK'D
            </span>
            <NavLink to="/" style={{marginRight: "70px"}}>
                <Icon path={mdiAccountCircle} size={2} color={"#688D84"} className="usericon"/>
            </NavLink>
        </header>
    )
}

export default Navbar
