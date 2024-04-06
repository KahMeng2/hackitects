import Footer from "./Footer";
import SpaghettiCarbonara from "../assets/spaghetti-carbonara.jpg"
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

const RecipeDetail = () => {
    const [ingredient, setIngredient] = useState([])
    const { state } = useLocation();
    const { recipe } = state || {};

    const style = {
        title:{
            fontFamily:""
        }
    }




    return (
        <div>
            <div className="recipe-detail" style={{marginBottom:"50px", textAlign:"center"}}>

                <img src={recipe.image} alt={recipe.name} className="recipe-image" style={{height:"30vh", width:"100vw"}}/>

                <div style={{display:"flex", justifyContent:"center", gap:"50px", color:"#688D84", marginLeft:"30px", paddingTop:"30px"}}>
                        <h1 style={{fontFamily:"Readex Pro", fontWeight:"600"}}>Recipe: </h1>
                        <h1 style={{fontFamily:"Gaegu", fontWeight:"700"}}>{recipe.name}</h1>
                    </div>
                <div style={{margin:"0 auto", textAlign: "center", display:"flex", justifyContent:"center"}}> 
                    <div className="md-2" style={{display:"flex", flexDirection:"row"}}>
                        <div className="ingredients">
                            <h2 style={{fontFamily:"Gaegu", fontWeight:"700", color:"#688D84", textAlign:"left", marginLeft:"40px", marginTop:"50px"}}>Ingredients:</h2>
                            <ul style={{fontFamily:"Gaegu", fontWeight:"700", color:"var(--cambridge-blue)", textAlign:"left"}}>
                                <h4 style={{fontWeight:"700"}}>1kg chicken thigh</h4>
                            </ul>
                            <ul style={{fontFamily:"Gaegu", fontWeight:"700", color:"var(--cambridge-blue)", textAlign:"left"}}>
                                <h4 style={{fontWeight:"700"}}>spaghetti</h4>
                            </ul>
                        </div>
                        <div className="instructions">
                            <h2 style={{fontFamily:"Gaegu", fontWeight:"700", color:"#688D84", textAlign:"left", marginLeft:"40px", marginTop:"50px"}}>Instructions:</h2>
                            <ol style={{fontFamily:"Gaegu", fontWeight:"700", color:"var(--cambridge-blue)", textAlign:"left", marginLeft:"50px"}}>
                                {recipe.description.map((description, index) => (
                                    <li key={index}><h4 style={{fontWeight:"700"}}>{description}</h4></li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default RecipeDetail;