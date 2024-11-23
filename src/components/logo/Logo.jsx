import book from '../../assets/logo.png';
import s from './logo.module.scss';

const Logo = () => {
  return (
    <section className={s.logoContainer}>
      <img src={book} alt="logo de um livro" className={s.logoImg} />
      <h2 className={s.logoH2}>Livros Vai na Web</h2>
    </section>
  );
};

export default Logo;