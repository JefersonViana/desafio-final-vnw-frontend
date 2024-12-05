import s from './footer.module.scss';
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'

const Footer = () => {
  return (
    <footer>
      <section className={s.footerSectionOne}>
        <p>4002-8922</p>
        <ul className={s.footerUl}>
          <li><img src={facebook} alt="Link do facebook"  className={s.footerImg} /></li>
          <li><img src={twitter} alt="Link do twitter"  className={s.footerImg} /></li>
          <li><img src={youtube} alt="Link do youtube"  className={s.footerImg} /></li>
          <li><img src={linkedin} alt="Link do linkedin"  className={s.footerImg} /></li>
          <li><img src={instagram} alt="Link do instagram"  className={s.footerImg} /></li>
        </ul>
      </section>
      <section className={s.footerSectionTwo}>
        <p className={s.footerParagraph}>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
      </section>
    </footer>
  );
};

export default Footer;