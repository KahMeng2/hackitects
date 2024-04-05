import img from "../assets/banner.webp"
import GenButton from "../component/GenButton";

const Banner = () => {
    const styles = {
        banner: {
            position: 'relative',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '450px',
        },
        overlay: {
            display: "flex", 
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "rgba(0,0,0,0.3)"
        }
    }
    return (
        // <div style={{position: "relative", display:"flex", justifyContent:"center"}}>
        //     <img src={img} style={{objectFit:"cover", width:"100%", height:"300px", filter:"brightness(80%) contrast(100%) saturate(70%) sepia(5%)"}}></img>
        //     <p style={{position: "absolute", top:"15%", bottom:"50%", color:"white", fontFamily:"Gaegu", fontSize:"70px"}}>
        //         Let's get cooking with
        //         <div style={{textAlign:"center", fontFamily:"Lilita One"}}>underCOOK'D</div>
        //     </p>
        // </div>
        <div style={{backgroundImage:`url(${img})`, ...styles.banner}}>
            <div className="absolute top-0 left-0 h-100" style={styles.overlay}>
                <p style={{color:"white", fontFamily:"Gaegu", fontSize:"70px"}}>
                    Let's get cooking with
                    <div style={{textAlign:"center", fontFamily:"Lilita One"}}>underCOOK'D</div>
                </p>
                <GenButton/>
            </div>
        </div>
            
    )
}

export default Banner