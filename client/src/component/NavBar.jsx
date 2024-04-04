import { Form, NavLink, Navigate, useNavigate, Link } from "react-router-dom"
import Icon from '@mdi/react';
import { mdiAccountCircle } from '@mdi/js';

const Navbar = () => {
    return (
        <div className="container" style={{display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "#BEC9C0", width: "100vw"}}>
            <span style={{color:"#688D84", fontFamily: "Lilita One", fontSize: 80}}>
                underCOOK'D
            </span>
            <NavLink to="/">
                <Icon path={mdiAccountCircle} size={2.5} color={"#688D84"} className="usericon"/>
            </NavLink>
        </div>
    )
}

export default Navbar