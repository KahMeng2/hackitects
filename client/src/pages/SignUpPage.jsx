import UserAndPW from "../component/UserAndPass"
import Footer from "../component/Footer"


const SignUpPage = () => {
    return (
        <div>
            <div style={{backgroundColor:"#BEC9C0"}}>
                <h1 style={{color:"#688D84", fontFamily:"Readex Pro",paddingTop:"50px", marginBottom:"50px", fontWeight:"700"}}>Sign Up</h1>
                <div style={{backgroundColor:"#BEC9C0", display:"flex", alignSelf:"center", justifyContent:"center"}}>
                    <UserAndPW/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SignUpPage