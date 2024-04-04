import { Form, NavLink, Navigate, useNavigate, Link, useLocation } from "react-router-dom"


function checkLocation({path}){
    return path;
}

const GenButton = () => {

    const location = useLocation();

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

    return (
        <NavLink to={redirectToPath()}>
            <div className="banner">
                
            </div>
            <button className="generate">
                GENERATE RECIPE
            </button>
            <button className="generate" id="test">
                GENERATE RECIPE
            </button>
        </NavLink>
    )
}

export default GenButton