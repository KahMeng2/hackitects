const RecipeDetail = ({ recipe }) => {

    const style = {
        title:{
            fontFamily:""
        }
    }

    return (
        <div className="recipe-detail">
            <div style={{display:"flex", justifyContent:"flex-start", alignContent:"flex-end", gap:"50px", color:"#688D84", marginLeft:"30px", paddingTop:"30px"}}>
                <h1 style={{fontFamily:"Readex Pro", fontWeight:"600"}}>Recipe: </h1>
                <h1 style={{fontFamily:"Gaegu", fontWeight:"700"}}>{recipe.title}</h1>
            </div>
            
            <h2 style={{fontFamily:"Gaegu", fontWeight:"700", color:"var(--cambridge-blue)", textAlign:"left", marginLeft:"40px", marginTop:"50px"}}>Ingredients:</h2>
            <ul style={{fontFamily:"Gaegu", fontWeight:"700", color:"var(--cambridge-blue)", textAlign:"left"}}>
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