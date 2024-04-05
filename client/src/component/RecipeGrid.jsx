import { useState } from 'react';
import { Container, Row, Col, Card, Carousel, CardGroup } from 'react-bootstrap';

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
            height: '600px',
        }, 
        col: {
            flex: 1,
            flexBasis: '25%'
        },
        card: {
            backgroundColor: 'var(--hunyadi-yellow)',
            borderRadius: 40,
            height: '220px',
            width: '100%',
            border: '0',
            padding: '0'
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
            fontSize: '80',
            textOverflow: 'ellipsis',
            whiteSpace: 'noWrap',
            webkitLineClamp: 1,
            overflow: 'hidden'
        }
    }

    return (
        <div className='gap-5' style={styles.row} >
            {recipes.map((recipe, idx) => (
                <Card key={idx}  className="recipe-card shadow" style={styles.card}>
                    <div style={{ backgroundImage: `url(${recipe.image})`, 
                                    backgroundRepeat: 'no-repeat', 
                                    backgroundPosition: 'center', 
                                    backgroundSize: 'cover', 
                                    height: '150px', 
                                    borderRadius: '40px 40px 0 0'}}/>
                    <Card.Body style={{ overflow: 'hidden' }}>
                        <h5 style={styles.cardTitle}>{recipe.title}</h5>
                    </Card.Body>
                </Card>
            ))}
        </div>
        //<Card.Img variant="top" src={recipe.image} alt={recipe.title}  style={styles.cardImage}/>
    );
};

export default RecipeGrid;