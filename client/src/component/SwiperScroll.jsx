import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Card } from 'react-bootstrap';
import './SwiperScroll.css';

const SwiperScroll = ({ recipes }) => {
    const styles = {
        title: {
            color: 'var(--light-coral)',
            fontFamily: 'Readex Pro',
            marginLeft: '50px',
            fontSize: '80',
            textAlign: 'left'
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
        <div className='p-4'>
            <h1 style={styles.title}>Sample Recipes</h1>
            <Swiper className='p-4' modules={[Autoplay]} spaceBetween={50} slidesPerView={3} autoplay={{delay:3000, pauseOnMouseEnter:true}}>
                {recipes.map((recipe, idx) => (
                    <SwiperSlide className="scroll-card-slide" key={idx}>
                         <Card className="scroll-card shadow">
                            <div className="cover" style={{ backgroundImage: `url(${recipe.image})`}}/>
                            <Card.Body style={{ overflow: 'hidden' }}>
                                <h3 style={styles.cardTitle}>{recipe.title}</h3>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperScroll