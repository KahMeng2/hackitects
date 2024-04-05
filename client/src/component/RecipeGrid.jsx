import { useState } from 'react';
import { Container, Row, Col, Card, Carousel, CardGroup } from 'react-bootstrap';

const RecipeGrid = ({ recipes }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const styles = {
        cardContainer: {
            backgroundColor: '#FDDFDA',
            width: '100%',
            height: '320px',
            position: 'relative'
        }, 
        card: {
            backgroundColor: '#FF8577',
            borderRadius: 40,
            height: '220px',
            width: '250px',
            position: 'absolute',
            marginTop: '50px',
            marginLeft: '50px',
            border: '0',
            padding: '0'
        },
        cardImage: {
            objectFit: 'cover',
            width: '100%',
            height: '11vw',
            borderRadius: '40px 40px 0 0'
        },
        cardTitle: {
            color: '#FFFFFF',
            fontFamily: 'Gaegu',
            fontSize: '7-'
        }
      }

    return (
        <Container className="recipe-grid container" style={styles.cardContainer}>
            <Row className='row'>
                {recipes.map((recipe, idx) => (
                    <Col className='col' key={idx}>
                        <Card className="recipe-card" style={styles.card}>
                            <Card.Img variant="top" src={recipe.image} alt={recipe.title}  style={styles.cardImage}/>
                            <Card.Body>
                                <Card.Title style={styles.cardTitle}>{recipe.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default RecipeGrid;