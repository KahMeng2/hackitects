import { Form, NavLink, Navigate, useNavigate, Link, useLocation } from "react-router-dom"
import Icon from '@mdi/react';
import { mdiAccountCircle } from '@mdi/js';
import AuthButtons from "./AuthButtons";

const Navbar = () => {

    const location = useLocation();

    if (location.pathname === '/signup'){
        return (
            <header style={{display: "flex", alignItems: "center", 
            justifyContent: "space-between", backgroundColor: "#BEC9C0", width:'100%', paddingTop:"5px", paddingBottom:"5px"}}>
                <span style={{color:"#688D84", fontFamily: "Lilita One", fontSize: 32, marginLeft:"70px"}}>
                    underCOOK'D
                </span>
            </header>
        )
    }

    else if (location.pathname === '/login'){
        return (
            <header style={{display: "flex", alignItems: "center", 
            justifyContent: "space-between", backgroundColor: "#CFD6DC", width:'100%', paddingTop:"5px", paddingBottom:"5px"}}>
                <span style={{color:"var(--darker-blue)", fontFamily: "Lilita One", fontSize: 32, marginLeft:"70px"}}>
                    underCOOK'D
                </span>
            </header>
        )
    }

    else if (location.pathname === '/landing'){
        return (
            <header style={{display: "flex", alignItems: "center", 
            justifyContent: "space-between", backgroundColor: "#BEC9C0", width:'100%', paddingTop:"5px", paddingBottom:"5px"}}>
                <span style={{color:"#688D84", fontFamily: "Lilita One", fontSize: 32, marginLeft:"70px"}}>
                    underCOOK'D
                </span>
                <AuthButtons/>
            </header>
        )
    }

    else {

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

}

export default Navbar
