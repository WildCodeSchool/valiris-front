import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/home.css';

const Home = () => {
  const { t } = useTranslation();

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
      <div className='home-content'>
        <h2 className='home-title animate four'>
          <span>V</span><span>a</span><span>l</span><span>i</span><span>r</span><span>i</span><span>s</span>&nbsp;
          <span>R</span><span>é</span><span>s</span><span>i</span><span>d</span><span>e</span><span>n</span><span>c</span><span>e</span>
        </h2>
        <hr />
        <p className='catch-phrase'>
          {t('home-catch-phrase.label')}
        </p>
      </div>
    </div>
  );
};

export default Home;
