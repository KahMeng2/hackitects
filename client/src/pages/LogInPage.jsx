import UserAndPW from "../component/UserAndPass"
import Footer from "../component/Footer"


const LoginPage = () => {
    return (
        <div>
            <div style={{backgroundColor:"#CFD6DC"}}>
                <h1 style={{color:"var(--darker-blue)", fontFamily:"Readex Pro",paddingTop:"50px", marginBottom:"50px", fontWeight:"700"}}>Login</h1>
                <div style={{backgroundColor:"#CFD6DC", display:"flex", alignSelf:"center", justifyContent:"center"}}>
                    <UserAndPW/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default LoginPage