import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const RecipeGrid = ({ recipes }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const styles = {
        row: {
            display: 'grid',
            width: '100%',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))'
        },
        cardContainer: {
            backgroundColor: '#F7E1C',
            width: '100%',
        }, 
        col: {
            flex: 1,
            flexBasis: '25%'
        },
        cardImage: {
            objectFit: 'cover',
            maxWidth: '200px',
            height: '11vw',
            borderRadius: '40px 40px 0 0'
        },
        cardTitle: {
            color: '#FFFFFF',
            fontFamily: 'Gaegu',
            fontSize: 24,
            textOverflow: 'ellipsis',
            whiteSpace: 'noWrap',
            webkitLineClamp: 1,
            overflow: 'hidden'
        }
    }

    return (
        <div className='gap-5' style={styles.row} >
            {recipes.map((recipe, idx) => (
                <NavLink to={`/recipes/${recipe._id}`} state={{ recipe }}>
                    {console.log(`/recipes/${recipe._id}`)}
                    <Card key={idx}  className="all-recipe-card shadow">
                        <div style={{ backgroundImage: `url(${recipe.image})`, 
                                        backgroundRepeat: 'no-repeat', 
                                        backgroundPosition: 'center', 
                                        backgroundSize: 'cover', 
                                        height: '150px', 
                                        borderRadius: '40px 40px 0 0'}}/>
                        <Card.Body style={{ overflow: 'hidden' }}>
                            <h5 style={styles.cardTitle}>{recipe.name}</h5>
                        </Card.Body>
                    </Card>
                </NavLink>
            ))}
        </div>
        //<Card.Img variant="top" src={recipe.image} alt={recipe.title}  style={styles.cardImage}/>
    );
};

export default RecipeGrid;