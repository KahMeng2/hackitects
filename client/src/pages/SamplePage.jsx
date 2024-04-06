import Footer from "../component/Footer";
import ReturnHomeButton from "../component/ReturnHomeButton";
import GenButton from "../component/GenButton";
import Scroll from "../component/Scroll";


const SamplePage = () => {
    const recipes = [
        { title: 'Spaghetti Carbonara', image: '/src/assets/spaghetti-carbonara.jpg' },
        { title: 'Chicken Curry', image: '/src/assets/chicken-curry.jpg' },
        { title: 'Chocolate Cake', image: '/src/assets/chocolate-cake.jpg' },
        { title: 'Spaghetti Carbonara', image: '/src/assets/spaghetti-carbonara.jpg' },
        { title: 'Chicken Curry', image: '/src/assets/chicken-curry.jpg' }
        // Add more recipes as needed
    ];

    const styles = {
        title: {
            color: 'var(--hunyadi-yellow)',
            fontFamily: 'Readex Pro',
            paddingTop: '40px',
            marginBottom: '40px',
            fontSize: 64
          }
    }

    return (
        <div>
            <div style={{ minHeight: "70vh", height:"auto"}}>
            <div style={{ display:"flex", alignSelf:"center", justifyContent:"center"}}>
                </div>
                <div>
                    <h1 style={{color:"var(--hunyadi-yellow)", fontFamily:"Readex Pro",paddingTop:"50px", marginBottom:"50px", fontWeight:"700"}}>Successfully cook'd!</h1>
                    <h2 style={{color:"var(--hunyadi-yellow)", fontFamily:"Readex Pro",paddingTop:"50px", marginBottom:"50px", fontWeight:"700"}}>Here are a list of recipes using the input ingredients</h2>
                    <Scroll recipes={recipes} colour={"yellow"}/>
                </div>
            </div>
            <div>
                <GenButton/>
                <ReturnHomeButton/>
            </div>
            <div style={{position:"fixed", bottom:"0", width:"100vw"}}>
                <Footer/>
            </div>
        </div>
    )
}

export default SamplePage