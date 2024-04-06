import NavBar from "../component/NavBar"
import Footer from "../component/Footer"


const LoginPage = () => {
    return (
        <div>
            <div style={{backgroundColor:"#CFD6DC", minHeight: "70vh", height:"auto"}}>
                <h1 style={{color:"var(--darker-blue)", fontFamily:"Readex Pro",paddingTop:"50px", marginBottom:"50px", fontWeight:"700"}}>Login</h1>
                <div style={{backgroundColor:"#CFD6DC", display:"flex", alignSelf:"center", justifyContent:"center"}}>
                    <NavBar/>
                </div>
            </div>
            <div style={{position:"fixed", bottom:"0", width:"100vw"}}>
                <Footer/>
            </div>
        </div>
    )
}

export default LoginPage