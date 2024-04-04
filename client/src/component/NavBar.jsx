import { Form, NavLink, Navigate, useNavigate, Link } from "react-router-dom"
import Icon from '@mdi/react';
import { mdiAccountCircle } from '@mdi/js';

const Navbar = () => {
    return (
        <div className="container" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <NavLink to="/">
                <Icon path={mdiAccountCircle} size={2.5} color={"lightcoral"} className="usericon"/>
            </NavLink>
            <span style={{color:"lightcoral", fontFamily: "Lilita One", fontSize: 80, paddingLeft: 150}}>
                underCOOK'D
            </span>
        </div>
    )
}

export default Navbar