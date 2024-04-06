import { Form, NavLink, Navigate, useNavigate, Link, useLocation } from "react-router-dom"


function checkLocation({path}){
    return path;
}

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
        if (location.pathname === '/landing') {
            return '/sample';
        } else if (location.pathname === '/dashboard') {
            return '/generate';
        } else {
            // You can handle other routes or conditions here
            return '/';
        }
}

    const colourtheme = getColours()

    return (
        <NavLink to={redirectToPath()}>
            <button className="generate" style={{backgroundColor:colourtheme.bgcolour, color:colourtheme.textcolour}}>
                GENERATE RECIPES
            </button>
        </NavLink>
    )
}

export default GenButton