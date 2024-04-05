import Scroll from "../component/Scroll";
import GenButton from "../component/GenButton";
import Footer from "../component/Footer";

const recipes = [
    { title: 'Spaghetti Carbonara', image: '/src/assets/spaghetti-carbonara.jpg' },
    { title: 'Chicken Curry', image: '/src/assets/chicken-curry.jpg' },
    { title: 'Chocolate Cake', image: '/src/assets/chocolate-cake.jpg' },
    { title: 'Spaghetti Carbonara', image: '/src/assets/spaghetti-carbonara.jpg' },
    { title: 'Chicken Curry', image: '/src/assets/chicken-curry.jpg' },
    { title: 'Chocolate Cake', image: '/src/assets/chocolate-cake.jpg' }
    // Add more recipes as needed
];


const DashboardPage = () => {

    return (
        <div style={{height:'85vh'}}>
            <div>
                <GenButton/>
            </div>
            <div style={{marginTop:'-30px'}}>
                <h2 style={{ textAlign: "left", marginLeft:"50px", fontFamily: "Readex Pro", color: "lightcoral"}}>Current recipes</h2>
                <Scroll recipes={recipes} colour={"red"}/>
            </div>
            <div>
                <h2 style={{textAlign: "left", marginLeft:"50px", fontFamily: "Readex Pro", color: "var(--hunyadi-yellow)"}}>Past recipes</h2>
                <Scroll recipes={recipes} colour={"yellow"}/>
            </div>
            <div style={{position:"fixed", bottom:"0", width:"100vw"}}>
                <Footer/>
            </div>
        </div>
    )
}

export default DashboardPage