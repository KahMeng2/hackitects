import UserAndPW from "../component/UserAndPass"
import Footer from "../component/Footer"
import image_18 from "../assets/image_18.png"


const LoginPage = () => {

    const style = {
        overlay: {
            display: "flex", 
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "rgba(0,0,0,0.3)"
        }
    }

    return (
        <div>
            <div style={{backgroundColor:"#CFD6DC", minHeight: "100vh", height:"auto"}}>
                <h1 style={{color:"var(--darker-blue)", fontFamily:"Readex Pro",paddingTop:"50px", marginBottom:"50px", fontWeight:"700"}}>Login</h1>
                <div style={{backgroundColor:"#CFD6DC", display:"flex", alignSelf:"center", justifyContent:"center"}}>
                    <UserAndPW/>
                </div>
            </div>
            <div style={{position:"fixed", bottom:"0", width:"100vw"}}>
                <Footer/>
            </div>
        </div>
    )
}

export default LoginPage