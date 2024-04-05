import { NavLink, Navigate, useNavigate, Link, useLocation } from "react-router-dom"

const AuthButtons = () => {

    const style = {
        button: {
            borderRadius: "10px",
            backgroundColor: "#688D84",
            color:"#F2F9F4",
            fontFamily: "Readex Pro",
            margin:"5px 10px",
            padding:"5px 20px"
        }
    }

    return (
        <div style={{marginRight:"50px"}}>
            <NavLink to={'/login'}>
                <button style={style.button}>
                    Log in
                </button>
            </NavLink>
            <NavLink to={'/signup'}>
                <button style={style.button}>
                    Sign up
                </button>
            </NavLink>
        </div>
    )
}

export default AuthButtons