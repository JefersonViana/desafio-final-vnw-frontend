import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';
import s from './livrosDoados.module.scss';
import img from '../../assets/livroDoado.png'

const QueroDoar = () => {
  return (
    <>
    <Header />
    <main className={s.livrosDoadosMain}>
      <section className={s.livrosDoadosSection}>
        <img src={img} alt="livro doado" className={s.livrosDoadosImg} />
      </section>
    </main>
    <Footer />
    </>
  );
};

export default QueroDoar;
