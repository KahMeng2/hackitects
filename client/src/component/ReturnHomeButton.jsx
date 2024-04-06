import { Form, NavLink, Navigate, useNavigate, Link, useLocation } from "react-router-dom"


function checkLocation({path}){
    return path;
}

const ReturnHomeButton = () => {

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

    const colourtheme = getColours()

    return (
        <NavLink to={'/dashboard'}>
            <button className="generate" style={{backgroundColor:colourtheme.bgcolour, color:colourtheme.textcolour}}>
                RETURN HOME
            </button>
        </NavLink>
    )
}

export default ReturnHomeButton