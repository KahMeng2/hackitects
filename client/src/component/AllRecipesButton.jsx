import { Form, NavLink, Navigate, useNavigate, Link, useLocation } from "react-router-dom"
import AllRecipesPage from "../pages/AllRecipesPage"

const AllRecipesButton = () => {
    return (
        <NavLink to={'/recipes'}>
            <button className="generate" style={{backgroundColor:"#84A59D", color:"#F2F9F4", fontFamily:"Gaegu"}}>
                ALL RECIPES
            </button>
        </NavLink>
    )
}

export default AllRecipesButton