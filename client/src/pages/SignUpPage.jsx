import UserAndPW from "../component/UserAndPass"
import RegisButton from "../component/RegisterButton"

const SignUpPage = () => {
    return (
        <div style={{backgroundColor:"#BEC9C0"}}>
            <h1 style={{color:"#688D84", fontFamily:"Readex Pro",paddingTop:"50px", marginBottom:"50px", fontWeight:"700"}}>Sign Up</h1>
            <div style={{backgroundColor:"#BEC9C0", display:"flex", alignSelf:"center", justifyContent:"center"}}>
                <UserAndPW/>
            </div>
            <RegisButton/>
        </div>
    )
}

export default SignUpPage