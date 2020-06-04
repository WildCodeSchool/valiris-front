import React from 'react';
import '../styles/aboutus.css';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation()
  return (
    <section className='aboutus-container'>
      <article className='first-article-aboutus'>
        <h2>{t("page-about-h1.label")}</h2>
        <div className='aboutus-image-container'>
          <img className='aboutus-image' alt='img-1' src={require('../images/maison_photo1.jpg')} />
          <img className='aboutus-image' alt='img-2' src={require('../images/maison_photo2.jpg')} />
          <img className='aboutus-image' alt='img-3' src={require('../images/maison_photo3.jpg')} />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque ac nisl in fermentum. Duis imperdiet enim non mauris accumsan, vitae placerat eros pulvinar. Proin est ipsum, mattis a malesuada feugiat, ornare vel leo. Cras nulla quam, eleifend vulputate velit sit amet, volutpat ultrices lorem. Etiam rhoncus iaculis lacus, at tristique erat luctus vitae. Sed nec augue ipsum. Pellentesque nec dolor tincidunt, consectetur diam id, pellentesque risus. Etiam viverra orci volutpat, fringilla arcu sed, facilisis ante. Donec iaculis commodo dignissim. Fusce vitae tempus est. Donec tincidunt, dui in congue rhoncus, velit sapien suscipit leo, nec pulvinar lacus metus nec arcu. Nunc posuere mi vel sapien mollis, in congue lacus molestie. Proin vitae lectus sed dui luctus finibus non ac urna. Ut vitae lectus eu nunc euismod ullamcorper. Donec sit amet lectus tempor, consequat felis elementum, gravida justo. Cras tincidunt ultrices blandit.
            <br />
            Suspendisse vel sem sed lorem congue bibendum. Mauris finibus metus eu risus sodales condimentum. Ut lobortis leo ante, quis porta nunc feugiat sed. Maecenas elit quam, venenatis quis pulvinar ac, convallis quis diam. Sed tincidunt orci ex, semper pretium enim eleifend vel. Integer nec sapien enim. Pellentesque dapibus dolor est, vel bibendum mauris finibus vel.
            Vivamus at sollicitudin leo. Phasellus vel dolor suscipit, scelerisque dolor ullamcorper, volutpat leo. Nullam scelerisque fermentum metus ut posuere. Proin placerat enim eget tempor dignissim. Vivamus feugiat diam ac hendrerit lobortis. Nam egestas vehicula viverra. Nulla ultricies magna sed finibus fringilla.
          </p>
        </div>
      </article>

      <article className='second-article-aboutus'>
        <h2>{t("page-about-h2.label")}</h2>
        <div className='div-about'>
          <img className='aboutus-image' alt='img-4' src={require('../images/village.jpg')} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis id magna interdum tincidunt. Vivamus ac auctor sem. Phasellus odio lectus, varius a ultrices pharetra, fringilla vitae augue. Donec pulvinar, erat ac venenatis tempus, quam purus consequat sapien, at sollicitudin nibh leo non tellus. Phasellus convallis est ac odio viverra, ut accumsan enim auctor. Quisque malesuada at eros ac tristique. Vivamus in ex tempus, euismod diam at, iaculis massa. Donec pellentesque id quam eu feugiat. Curabitur sem purus, condimentum vel augue sed, sodales convallis mauris. Morbi viverra feugiat ligula ac fringilla.
            <br />
            Vestibulum tincidunt vestibulum nisi, eget efficitur nisl placerat ac. Praesent faucibus ante id malesuada imperdiet. Nam condimentum fermentum mi ut convallis. Nam accumsan purus nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum a purus fringilla, venenatis nulla non, rutrum felis. Nulla convallis luctus lectus.
          </p>
        </div>
      </article>

    </section>
  );
};

export default AboutUs;
