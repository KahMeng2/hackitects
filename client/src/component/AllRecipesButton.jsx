import { Form, NavLink, Navigate, useNavigate, Link, useLocation } from "react-router-dom"
import AllRecipesPage from "../pages/AllRecipesPage"

const AllRecipesButton = () => {
    return (
        <NavLink to={'/recipes'}>
            <button>
                All Recipes
            </button>
        </NavLink>
    )
}