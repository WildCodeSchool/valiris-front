import React from 'react';
import '../styles/aboutus.css';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <section className='aboutus-container'>
      <article className='first-article-aboutus'>
        <h2>{t('page-about-h1.label')}</h2>
        <div className='aboutus-image-container'>
          <img className='aboutus-image' alt='img-1' src={require('../images/maison_photo1.jpg')} />
          <img className='aboutus-image' alt='img-2' src={require('../images/maison_photo2.jpg')} />
          <img className='aboutus-image' alt='img-3' src={require('../images/maison_photo3.jpg')} />
        </div>
        <div>
          <p>{t('page-about-paragraph-about.label')}</p>
        </div>
      </article>

      <article className='second-article-aboutus'>
        <h2>{t('page-about-h2.label')}</h2>
        <div className='div-about'>
          <img className='aboutus-image' alt='img-4' src={require('../images/village.jpg')} />
          <p>{t('page-about-our-project.label')}</p>
        </div>
      </article>

    </section>
  );
};

export default AboutUs;
