
import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';
import s from './querodoar.module.scss';
import img from '../../assets/book.png'

const QueroDoar = () => {
  return (
    <>
    <Header />
    <main className={s.queroDoarMain}>
      <p className={s.queroDoarParagraph}>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
      <form action="" className={s.queroDoarForm}>
        <fieldset className={s.queroDoarFieldOne}>
          <img src={img} alt="icon de um livro aberto" />
          <h4>Informação do Livro</h4>
        </fieldset>
        <fieldset className={s.queroDoarFieldTwo}>
          <input type="text" className={s.queroDoarInputs} placeholder="Título" />
          <input type="text" className={s.queroDoarInputs} placeholder="Categoria" />
          <input type="text" className={s.queroDoarInputs} placeholder="Autor" />
          <input type="text" className={s.queroDoarInputs} placeholder="Link da Imagem" />
        </fieldset>
        <button type="submit"  className={s.queroDoarButton}>Doar</button>
      </form>
    </main>
    <Footer />
    </>
  );
};

export default QueroDoar;