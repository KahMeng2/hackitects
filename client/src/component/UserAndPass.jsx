import { Form, useLocation} from "react-router-dom"
import RegisButton from "./RegisterButton"


const UserAndPW = () => {

    const location = useLocation();

    const getColours = () => {
        if (location.pathname === '/signup'){
            return {
                bgcolour:"#BEC9C0",
                textcolour:"#688D84"
            }
        }
        else if (location.pathname === '/login'){
            return {
                bgcolour:"#CFD6DC",
                textcolour:"#7090A8"
            }
        }
    }

    const {bgcolour, textcolour} = getColours();

    const styles = {
        input: {
            color:textcolour,
            backgroundColor:"#ECE5DE", 
            border: "none",
            borderRadius: "10px",
            fontWeight: "500",
            paddingLeft:"10px",
            paddingRight:"70px",
            paddingTop:"10px",
            paddingBottom:"10px"
        },
    }

    return (
        <div>
            <div className="input-group mb-3" style={{fontFamily:"Readex Pro", display:"block"}}>
                <h4 style={{color:textcolour, fontWeight:"500", textAlign:"left"}}>Username</h4>
                <input placeholder="Type your username" style={styles.input}/>
            </div>
            <div className="input-group mb-3" style={{fontFamily:"Readex Pro", display:"block"}}>
                <h4 style={{color:textcolour, fontWeight:"500", textAlign:"left"}}>Password</h4>
                <input type="password" style={styles.input}/>
            </div>
            <div style={{marginTop:"40px"}}>
                <RegisButton/>
            </div>
        </div>
        
    )
}

export default UserAndPW