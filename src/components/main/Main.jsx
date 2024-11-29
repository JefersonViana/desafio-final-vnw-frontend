import img from '../../assets/doacao.png';
import s from './main.module.scss';

const Main = () => {
  return (
    <main className={s.main}>
      <img src={img} alt="VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO" className={s.mainImg} />
      <h2 className={s.mainH2}>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
    </main>
  );
};

export default Main;