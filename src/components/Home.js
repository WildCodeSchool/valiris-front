import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/home.css';

const Home = () => {
  return (
    <div className='caroussel-container'>
      <Carousel
        autoPlay
        showArrows
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        stopOnHover={false}
        interval={6000}
        transitionTime={600}
        width='100%'
      >
        <div>
          <img src='https://www.vittoriarizzoli.com/wp-content/uploads/tbnl-4.jpg' alt='caroussel 1' />
        </div>
        <div>
          <img src='https://i.pinimg.com/originals/16/c4/35/16c4351260e47ac6f3ef397bfae21fbb.jpg' alt='caroussel 2' />
        </div>
        <div>
          <img src='https://www.planete-deco.fr/wp-content/uploads/2020/03/TO1.jpeg' alt='caroussel 3' />
        </div>
      </Carousel>
        <div>
          <p className='catch-phrase'>
          Dans un cadre naturel préservé, à la naissance du vallon de Rochecardon, profitez d'un appartement 2 pièces, de 36 à 40 m², meublé, contemporain et intégralement équipé à neuf, dans un double corps de bâtiment en pierre de taille.
          </p>
        </div>
    </div>
  );
};

export default Home;
