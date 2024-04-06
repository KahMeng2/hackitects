import RecipeDetail from '/src/component/RecipeDetails';

const RecipePage = () => {
    const recipe = {
        title: 'Spaghetti Carbonara',
        ingredients: ['Spaghetti', 'Pancetta', 'Eggs', 'Parmesan Cheese', 'Black Pepper'],
        instructions: ['Boil spaghetti until al dente', 'Cook pancetta until crispy', 'Mix eggs and cheese', 'Combine everything and serve with black pepper'],
        image: 'spaghetti-carbonara.jpg'
    };

    return (
        <div>
            <h1>Recipe</h1>
            <RecipeDetail recipe={recipe} />
        </div>
    );
};

export default RecipePage;