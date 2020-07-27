import React from 'react';
import '../styles/term-of-service.css';

const TermOfService = () => {
  return (
    <div className='CGU-container'>
      <h2>Conditions générales d'utilisation - Données personnelles</h2>

      <div>
        <p className='CGU-paragraph'>
          <strong>L'Éditeur :</strong> La personne, physique ou morale, qui édite les services de communication au public en ligne.
        </p>

        <p className='CGU-paragraph'>
          <strong>Le Site :</strong> L'ensemble des sites, pages Internet et services en ligne proposés par l'Éditeur.
        </p>

        <p className='CGU-paragraph'>
          <strong>L'Utilisateur :</strong> La personne utilisant le Site et les services.
        </p>

        <h3>Nature des données collectées</h3>
        <p className='CGU-paragraph'>
        Dans le cadre de l'utilisation des Sites, l'Éditeur est susceptible de collecter les catégories de données suivantes concernant ses Utilisateurs :

        Données d'état-civil, d'identité, d'identification...
        </p>

        <p className='CGU-paragraph'>
        Communication des données personnelles à des tiers
        Pas de communication à des tiers
          <br />
        Vos données ne font l'objet d'aucune communication à des tiers. Vous êtes toutefois informés qu'elles pourront être divulguées en application d'une loi, d'un règlement ou en vertu d'une décision d'une autorité réglementaire ou judiciaire compétente
        </p>
      </div>

      <div>
        <h3>Information de l'Utilisateur en cas de faille de sécurité</h3>
        <div className='CGU-paragraph'>
          Nous nous engageons à mettre en oeuvre toutes les mesures techniques et organisationnelles appropriées afin de garantir un niveau de sécurité adapté au regard des risques d'accès accidentels, non autorisés ou illégaux, de divulgation, d'altération, de perte ou encore de destruction des données personnelles vous concernant. Dans l'éventualité où nous prendrions connaissance d'un accès illégal aux données personnelles vous concernant stockées sur nos serveurs ou ceux de nos prestataires, ou d'un accès non autorisé ayant pour conséquence la réalisation des risques identifiés ci-dessus, nous nous engageons à :
          <ul>
            <li>Vous notifier l'incident dans les plus brefs délais ;</li>
            <li>Examiner les causes de l'incident et vous en informer ;</li>
            <li>Prendre les mesures nécessaires dans la limite du raisonnable afin d'amoindrir les effets négatifs et préjudices pouvant résulter dudit incident</li>
          </ul>
        </div>

        <h3>Limitation de la responsabilité</h3>
        <p className='CGU-paragraph'>
        En aucun cas les engagements définis au point ci-dessus relatifs à la notification en cas de faille de sécurité ne peuvent être assimilés à une quelconque reconnaissance de faute ou de responsabilité quant à la survenance de l'incident en question.
        </p>
      </div>

      <div>
        <h3>Droit applicable et modalités de recours</h3>
        <p className='CGU-paragraph'>
        Les présentes CGU et votre utilisation du Site sont régies et interprétées conformément aux lois de France, et notamment à la Loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés. Le choix de la loi applicable ne porte pas atteinte à vos droits en tant que consommateur conformément à la loi applicable de votre lieu de résidence. Si vous êtes un consommateur, vous et nous acceptons de se soumettre à la compétence non-exclusive des juridictions françaises, ce qui signifie que vous pouvez engager une action relative aux présentes CGU en France ou dans le pays de l'UE dans lequel vous vivez. Si vous êtes un professionnel, toutes les actions à notre encontre doivent être engagées devant une juridiction en France.
        </p>
      </div>

    </div>
  );
};

export default TermOfService;
