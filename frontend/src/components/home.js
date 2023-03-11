import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <>
            <Carousel fade variant="dark">
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={require('../img/Banner1.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>VESTIMENTA</h3>
                        <p>Vístete con el mejor estilo que te podemos ofrecer.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={require('../img/Banner2.jpg')}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>ACCESORIOS</h3>
                        <p>Somos tus mejores accesorios.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={require('../img/Banner3.jpg')}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>COTIDIANO</h3>
                        <p>Empieza y termina el día con nosotros.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Home