import img from "../assets/banner.webp"

const Banner = () =>{
    return (
        <div className="container" style={{position: "relative", display:"flex", justifyContent:"center"}}>
            <img src={img} style={{objectFit:"cover", width:"100%", height:"400px", filter:"brightness(80%) contrast(100%) saturate(70%)"}}></img>
            <p style={{position: "absolute", top:"15%", bottom:"50%", color:"white", fontFamily:"Gaegu", fontSize:"70px"}}>
                Let's get cooking with
                <div style={{textAlign:"center", fontFamily:"Lilita One"}}>underCOOK'D</div>
            </p>
        </div>
    )
}

export default Banner