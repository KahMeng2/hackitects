import { Form } from "react-router-dom"
import RegisButton from "./RegisterButton"


const UserAndPW = () => {

    const styles = {
        input: {
            color:"#84A59D",
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
                <h4 style={{color:"#688D84", fontWeight:"500", textAlign:"left"}}>Username</h4>
                <input placeholder="Type your username" style={styles.input}/>
            </div>
            <div className="input-group mb-3" style={{fontFamily:"Readex Pro", display:"block"}}>
                <h4 style={{color:"#688D84", fontWeight:"500", textAlign:"left"}}>Password</h4>
                <input type="password" style={styles.input}/>
            </div>
            <div style={{marginTop:"40px", paddingBottom:"50px"}}>
                <RegisButton/>
            </div>
        </div>
        
    )
}

export default UserAndPW