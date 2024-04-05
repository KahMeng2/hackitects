import Banner from "../component/Banner";
import Footer from "../component/Footer";
import GenButton from "../component/GenButton";
import Test from "../component/SearchBar_test";



const IngredientInputPage = () => {

    return (
        <div>
            <div style={{backgroundColor:"#CFD6DC", minHeight: "90vh", height:"auto"}}>
                <h1 style={{color:"var(--darker-blue)", fontFamily:"Readex Pro",paddingTop:"50px", marginBottom:"50px", fontWeight:"700"}}>Login</h1>
                <div style={{backgroundColor:"#CFD6DC", display:"flex", alignSelf:"center", justifyContent:"center"}}>
                    <Test/>
                </div>
            </div>
            <div style={{position:"fixed", bottom:"0", width:"100vw"}}>
                <Footer/>
            </div>
        </div>
        


        //<div>
          //  <Banner/>
            
            //<div>
              //  <h2 style={{paddingTop:"20px", padddingBottom:"30px", textAlign: "left", marginLeft:"50px", fontFamily: "Readex Pro", color: "var(--hunyadi-yellow)"}}>Search Ingredient</h2>
                //<Test/>

            //<div style={{paddingTop:"15px"}}>
              //  <GenButton/>
            //</div>
            //<Footer/>
            //</div>
        //</div>
    )
}

export default IngredientInputPage