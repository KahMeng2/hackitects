import Banner from "../component/Banner";
import SwiperScroll from "../component/SwiperScroll";
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


const LandingPage = () => {
    return (
        <div>
            <Banner/>
            <SwiperScroll recipes={recipes}/>
            <Footer/>
        </div>
    )
}

export default LandingPage