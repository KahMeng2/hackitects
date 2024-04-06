import SearchBar from "../component/SearchBar"
import Footer from "../component/Footer"
import SearchLogo from "../assets/Capa_1.svg"
import GenButton from "../component/GenButton"
import ReturnHomeButton from "../component/ReturnHomeButton"

const SearchPage = () => {
    const styles = {
        title: {
            color: '#7090A8',
            fontFamily: 'Readex Pro',
            fontSize: 32,
            marginLeft: "20px"
          }
    }
    return (
        <div>
            <div style={{backgroundColor:"#CFD6DC", minHeight: "100vh", height:"auto"}}> 
                <div style={{display: "flex", flexDirection: "row", width: "400px",  margin:"0 auto"}}>
                    <img src={SearchLogo} alt="logo" style={{height:"32px", width:"32px"}}/>
                    <h2 style={styles.title}>Search Ingredients</h2>
                </div>
                <SearchBar />
                <GenButton />
                <ReturnHomeButton/>
            </div>
            <div style={{position:"fixed", bottom:"0", width:"100vw"}}>
                <Footer/>
            </div>
        </div>
    )
}

export default SearchPage