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
          <p>
          Cette grande maison de caractère, patrimoine Limonois, a fait l'objet d'une rénovation intégrale en 2020. Au pied des Monts d'Or, profitant d'une orientation Sud et Ouest, elle offre une vue exceptionnelle  sur le Vallon de Rochecardon, les Monts du Lyonnais et les Monts du Forez au loin. Véritable havre de paix, son emplacement permet de profiter de larges espaces, d'un horizon dégagé et d'un environnement naturel protégé. 

          Valiris se situe à 25 minutes en bus du centre de Lyon. L'occasion de profiter de votre passage pour visiter Lyon, ses musées (Confluence, Musée Miniatures et Cinéma, Musée des Beaux Arts, etc.) et son centre historique (Vieux-Lyon, cathédrale St Jean). La ville est classée au Patrimoine Mondial de l’Unesco et oscarisée "Meilleure destination Européenne week-end" au World Travel Awards 2016 et Capitale Européenne 2019 du Smart Tourism.

          </p>
        </div>
      </article>

      <article className='second-article-aboutus'>
        <h2>{t('page-about-h2.label')}</h2>
        <div className='div-about'>
          <img className='aboutus-image' alt='img-4' src={require('../images/village.jpg')} />
          <p>
          Un déplacement professionnel vous amène dans le secteur de Lyon ? Le parc des Affaires de Crécy, le Parc d’activité de Champagne au Mont d’Or et le pôle Techlid sont facilement accessibles.

          Les restaurants de qualité des alentours vous réservent également de belles découvertes culinaires.

          La proximité du village (10 minutes à pied) permet un accès rapide à toutes les commodités : épicerie Casino, restaurants, spa, coiffeur, DAB.

          À quelques minutes en voiture, les installations sportives ne manquent pas : Keep Cool, L'Appart Fitness et Block Out, pour n'en citer que quelques unes, sont toutes facilement accessibles. Sans oublier les multiples sentiers de randonnée à proximité.

          La résidence dispose d'un parking ainsi que d'un accès Internet.
          </p>
        </div>
      </article>

    </section>
  );
};

export default AboutUs;
