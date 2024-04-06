import { Form, NavLink, Navigate, useNavigate, Link, useLocation } from "react-router-dom"
import { toast } from "react-toastify";
import axios from "axios";

const GenButton = () => {

    const location = useLocation();

    const getColours = () => {
        if (location.pathname === '/dashboard') {
            return {
                bgcolour: "#84A59D",
                textcolour: "#F2F9F4"}
        }
        else {
            return {
                bgcolour:"#F6BD60",
                textcolour:"#FFF3DF"
            }
        }
    }

    

    // Conditionally render different components based on the current path
    const redirectToPath = () => {
        if (location.pathname === '/') {
            return '/sample';
        } else if (location.pathname === '/dashboard') {
            return "/generate"
        } else if (location.pathname === '/generate'){
            toast.success("Meal plan Generated") 
            return "/"
        } else {
            // You can handle other routes or conditions here
            return '/';
        }
    }

    const colourtheme = getColours()


    if (location.pathname === '/meal-planner'){
        return (
            <NavLink to={redirectToPath()}>
                <button className="generate" style={{backgroundColor:colourtheme.bgcolour, color:colourtheme.textcolour}}>
                    GENERATE AGAIN
                </button>
            </NavLink>
        )
    }

    else if (location.pathname === '/landing'){
        return (
            <NavLink to={redirectToPath()}>
                <button className="generate" style={{backgroundColor:colourtheme.bgcolour, color:colourtheme.textcolour}}>
                    GENERATE SAMPLE MEAL PLAN
                </button>
            </NavLink>
        )
    }

    else {
        return (
            <NavLink to={redirectToPath()}>
                <button className="generate" style={{backgroundColor:colourtheme.bgcolour, color:colourtheme.textcolour}}>
                    GENERATE MEAL PLAN
                </button>
            </NavLink>
        )
    }
}

export default GenButton