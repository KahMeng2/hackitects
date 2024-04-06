import RecipeGrid from '/src/component/RecipeGrid';
import Scroll from "../component/Scroll";
import Footer from "../component/Footer"

const AllRecipesPage = () => {
    const recipes = [
        { title: 'Spaghetti Carbonara', image: '/src/assets/spaghetti-carbonara.jpg' },
        { title: 'Chicken Curry', image: '/src/assets/chicken-curry.jpg' },
        { title: 'Chocolate Cake', image: '/src/assets/chocolate-cake.jpg' },
        { title: 'Spaghetti Carbonara', image: '/src/assets/spaghetti-carbonara.jpg' },
        { title: 'Chicken Curry', image: '/src/assets/chicken-curry.jpg' },
        { title: 'Chocolate Cake', image: '/src/assets/chocolate-cake.jpg' }
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
        <div style={{margin: "0px 70px"}}>
            <h1 style={styles.title}>All Saved Recipes</h1>
            <RecipeGrid recipes={recipes} />
        </div>
        <Footer/>
        </div>
    );
};

export default AllRecipesPage;