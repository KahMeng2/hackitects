import Banner from "../component/Banner";
import Scroll from "../component/Scroll";

const recipes = [
    { title: 'Spaghetti Carbonara', image: '/src/assets/spaghetti-carbonara.jpg' },
    { title: 'Chicken Curry', image: '/src/assets/chicken-curry.jpg' },
    { title: 'Chocolate Cake', image: '/src/assets/chocolate-cake.jpg' },
    { title: 'Spaghetti Carbonara', image: '/src/assets/spaghetti-carbonara.jpg' },
    { title: 'Chicken Curry', image: '/src/assets/chicken-curry.jpg' },
    { title: 'Chocolate Cake', image: '/src/assets/chocolate-cake.jpg' }
    // Add more recipes as needed
];


const LandingPage = () => {
    return (
        <div>
            <Banner/>
            <Scroll recipes={recipes}/>

        </div>
    )
}

export default LandingPage