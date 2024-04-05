import Banner from "../component/Banner";
import Footer from "../component/Footer";
import GenButton from "../component/GenButton";
import Test from "../component/SearchBar_test";



const IngredientInputPage = () => {

    return (
        <div>
            <Banner/>
            
            <div>
                <h2 style={{paddingTop:"20px", padddingBottom:"30px", textAlign: "left", marginLeft:"50px", fontFamily: "Readex Pro", color: "var(--hunyadi-yellow)"}}>Search Ingredient</h2>
                <Test/>

            <div style={{paddingTop:"15px"}}>
                <GenButton/>
            </div>
            <Footer/>
            </div>
        </div>
    )
}

export default IngredientInputPage