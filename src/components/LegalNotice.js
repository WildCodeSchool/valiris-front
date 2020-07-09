import React from 'react';
import '../styles/legal-notice.css';

const LegalNotice = () => {
  return (
    <div className='legal-notice-container'>
      <h2>MENTIONS LEGALES :</h2>

      <div>
        <p className='legal-notice-paragraph'><br />
          Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site : <a href='http://www.exemple.com' target='_blank' rel='noopener noreferrer'>www.exemple.com</a> les informations suivantes :
        </p>
      </div>

      <div>
        <h3><strong>ÉDITEUR</strong></h3>

        <p className='legal-notice-paragraph'>Le site est la propriété exclusive de <strong>SCI Gervais Limonest</strong>, qui l'édite.
          <br />
          <br />
          <strong>SCI </strong>au capital de 850 000€
          <br />
          Tél: 0000000000
        </p>

        <p className='legal-notice-paragraph'><strong>470 Route de Saint Didier 69760 Limonest</strong>
          <br />
          <br />
          Immatriculée au Registre du Commerce et des Sociétés de  <strong>Lyon sous le numéro 75337080800010</strong>
        </p>

        <p className='legal-notice-paragraph'>Numéro TVA intracommunautaire : <strong>00</strong><br />
          Adresse de courrier électronique : <strong>stephane@valiris.fr</strong>
          <br />
          <br />
          Directeur de la  publication : <strong>Stephane Gervais</strong><br />
          Contactez le responsable de la publication : <strong>stephane@valiris.fr</strong>
        </p>
      </div>

      <div>
        <h3><strong>HÉBERGEMENT</strong></h3>

        <p className='legal-notice-paragraph'>Le site est hébergé par <strong>No info No info 69000 Lyon</strong><br />
        </p>
      </div>
    </div>

  );
};

export default LegalNotice;
