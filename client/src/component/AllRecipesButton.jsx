import { Form, NavLink, Navigate, useNavigate, Link, useLocation } from "react-router-dom"
import AllRecipesPage from "../pages/AllRecipesPage"

const AllRecipesButton = () => {
    return (
        <NavLink to={'/recipes'}>
            <button style={{backgroundColor:"#84A59D", color:"#F2F9F4"}}>
                ALL RECIPES
            </button>
        </NavLink>
    )
}