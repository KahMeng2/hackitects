import Scroll from "../component/Scroll";
import GenButton from "../component/GenButton"

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
        <div>
            <div style={{paddingTop:"15px"}}>
                <GenButton/>
            </div>
            
            <div>
                <h2 style={{paddingTop:"10px", padddingBottom:"30px", textAlign: "left", marginLeft:"50px", fontFamily: "Readex Pro", color: "lightcoral"}}>Current recipes</h2>
                <Scroll recipes={recipes} colour={"red"}/>
            </div>
            <div>
                <h2 style={{paddingTop:"20px", padddingBottom:"30px", textAlign: "left", marginLeft:"50px", fontFamily: "Readex Pro", color: "var(--hunyadi-yellow)"}}>Past recipes</h2>
                <Scroll recipes={recipes} colour={"yellow"}/>
            </div>
        </div>
    )
}

export default DashboardPage