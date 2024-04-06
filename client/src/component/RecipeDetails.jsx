const RecipeDetail = ({ recipe }) => {

    const style = {
        title:{
            fontFamily:""
        }
    }

    return (
        <div className="recipe-detail">
            <h2>{recipe.title}</h2>
            
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            
            <h3>Instructions:</h3>
            <ol>
                {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
            
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
        </div>
    );
};

export default RecipeDetail;