import RecipeGrid from '/src/component/RecipeGrid';
import Scroll from "../component/Scroll";
import Footer from "../component/Footer"
import { useEffect, useState } from 'react';
import axios from "axios";

const AllRecipesPage = () => {
    // When page loads, this functions add
    const [testRecipe, setRecipes] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/recipes')
        .then(res => {
            const recipe = res.data 
            console.log(recipe)
            setRecipes(recipe)
        }
        ).catch(e => {
            console.log(e)
        })

    },[])

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
            <h2 style={styles.title}>All Recipes</h2>
            <RecipeGrid recipes={testRecipe} />
        </div>
        <Footer/>
        </div>
    );
};

export default AllRecipesPage;