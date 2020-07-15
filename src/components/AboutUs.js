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
          <img className='aboutus-image' alt='img-1' src='https://cdn.pixabay.com/photo/2018/09/15/01/10/house-3678511_960_720.jpg' />
          <img className='aboutus-image' alt='img-2' src='https://images.unsplash.com/photo-1577957408117-53b656bdb93c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80' />
          <img className='aboutus-image' alt='img-3' src='https://cdn.pixabay.com/photo/2015/08/15/21/02/stone-portal-890145_960_720.jpg' />
        </div>
        <div>
          <p>{t('page-about-paragraph-about.label')}</p>
        </div>
      </article>

      <article className='second-article-aboutus'>
        <div className='div-about'>
          <img className='aboutus-image img-4' alt='img-4' src='https://cdn.pixabay.com/photo/2015/10/05/01/20/path-972128_960_720.jpg' />
          <p>
            <h2>{t('page-about-h2.label')}</h2>
            {t('page-about-our-project.label')}
          </p>
        </div>
      </article>

    </section>
  );
};

export default AboutUs;
