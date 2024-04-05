import UserAndPW from "../component/UserAndPass"
import Footer from "../component/Footer"
import image_18 from "../assets/image_18.png"
import image_19 from "../assets/image_19.png"
import image_20 from "../assets/image_20.png"
import image_21 from "../assets/image_21.png"


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