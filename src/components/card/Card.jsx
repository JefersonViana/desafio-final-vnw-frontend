import s from './card.module.scss';
import PropTypes from 'prop-types';

const Card = ({ srcImg, altImg, text}) => {
  return (
    <section className={s.cardSection}>
      <img src={srcImg} alt={altImg} className={s.cardImg}/>
      <p className={s.cardParagraph}>{text}</p>
    </section>
  );
};

Card.propTypes = {
  srcImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
export default Card;