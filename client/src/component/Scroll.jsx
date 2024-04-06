import { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';

const Scroll = ({ recipes, colour }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const getColours = (colour) => {
        if (colour === "yellow") {
            return {
                bgcolour:"#F7E1C2",
                textcolour:"#F6BD60"
            }
        }
        else {
            return {
                bgcolour:"#F5CAC3",
                textcolour:"#FF8577"
            }
        }
    }

    const {bgcolour, textcolour} = getColours(colour);

    const styles = {
        cardContainer: {
            backgroundColor: bgcolour,
            width: '100%',
            height: '210px',
            position: 'relative',
            paddingLeft: '25px',
            paddingBottom: '20px',
        }, 
        card: {
            backgroundColor: textcolour,
            borderRadius: 40,
            height: '120px',
            padding: 0,
            border: 0,
            marginRight: '40px'
        },
        cardImage: {
            objectFit: 'cover',
            width: '100%',
            height: '110px',
            borderRadius: '40px 40px 0 0'
        },
        cardBody: {
            overflow: 'hidden', 
            borderRadius: '0 0 40px 40px', 
            backgroundColor: textcolour, 
            paddingTop: '5px', 
            paddingBottom: '5px'
        },
        cardTitle: {
            color: '#FFFFFF',
            fontFamily: 'Gaegu',
            fontSize: 20
        }
    }

    return (
        <div style={styles.cardContainer}>
            <Swiper className='p-4' modules={[Pagination, Navigation]} navigation spaceBetween={50} slidesPerView={5} pagination={true} wrapperTag='ul'>
                {recipes.map((recipe, idx) => (
                    <SwiperSlide key={idx} wrapperTag='li'>
                        <div className="scroll-card shadow">
                            <div className="cover" style={{ backgroundImage: `url(${recipe.image})`, ...styles.cardImage}}/>
                            <div style={styles.cardBody}>
                                <h3 style={styles.cardTitle}>{recipe.title}</h3>
                            </div>
                        </div>
                    </SwiperSlide> 
                ))}               
            </Swiper>
        </div>
    );
};

export default Scroll;