import { useLocation } from "react-router-dom"

const Footer = () => {

    const location = useLocation();

    const getColours = () => {
        if (location.pathname === "/landing") {
            return {
                bgcolour: "#F7E1C2",
                textcolour: "#C78213"}
        }
        else if (location.pathname === '/dashboard' || location.pathname === '/signup') {
            return {
                bgcolour:"#CFD6DC",
                textcolour:"#7090A8"
            }
        }
        else if (location.pathname === '/login' || location.pathname === '/generate') {
            return {
                bgcolour:"#FDDFDA",
                textcolour:"#F28482"
            }
        }
        else {
            return {
                bgcolour:"#BEC9C0",
                textcolour:"#688D84"
            }
        }
    }

    const {bgcolour, textcolour} = getColours()

    return (
        <footer style={{backgroundColor: bgcolour, width:'100%',
        paddingTop:"10px", paddingBottom:"10px", position:"fixed", bottom:"0"}}>
            <div style={{textAlign:"center", fontFamily:"Gaegu", color:textcolour, fontSize:22}}>Made in Melbourne ♡ Cooked by Hackitects</div>
            <div style={{textAlign:"center", fontFamily:"Gaegu", color:textcolour, fontSize:22}}>facebook * instagram</div>
        </footer>
    )
}

export default Footer
