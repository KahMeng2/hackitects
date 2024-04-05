import { useState } from 'react';
import { Container, Row, Col, Card, Carousel, CardGroup } from 'react-bootstrap';

const Scroll = ({ recipes }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const styles = {
        cardContainer: {
            backgroundColor: '#FDDFDA',
            width: '100%',
            height: '320px',
            position: 'relative',
            overflow: 'scroll',
            borderRadius: "20px",
        }, 
        card: {
            backgroundColor: '#FF8577',
            borderRadius: 40,
            height: '220px',
            width: '250px',
            padding: 0,
            border: '0'
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
            fontSize: '7-',
        }
    }

    return (
        <Container className="recipe-grid container" style={styles.cardContainer}>
            <Row className='row' style={{display: "flex", flexWrap: "nowrap", marginTop: "50px"}}>
                {recipes.map((recipe, idx) => (
                    <Col className='col' key={idx} style={{width: "100%"}}>
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

export default Scroll;