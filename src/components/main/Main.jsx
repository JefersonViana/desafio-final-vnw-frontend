import img from '../../assets/doacao.png';
import s from './main.module.scss';
import Card from './../card/Card';
import imgBalance from '../../assets/balance.png';
import imgReading from '../../assets/reading.png';
import imgTransform from '../../assets/transform.png';
import imgCommunity from '../../assets/community.png';

const Main = () => {
  return (
    <main>
      <section className={s.mainSectionOne}>
        <img src={img} alt="VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO" className={s.mainImg} />
        <h2 className={s.mainH2}>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={s.mainSectionTwo}>
        <h2 className={s.mainSectionTwoH2}>Por que devo doar?</h2>
        <section className={s.mainSectionCards}>
          <Card srcImg={imgCommunity} altImg={'Icone representando uma comunidade'} text='Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.'  />
          <Card srcImg={imgReading} altImg={'Icone representando uma leitura'} text='Estimula o hábito da leitura e o aprendizado contínuo.'  />
          <Card srcImg={imgTransform} altImg={'Icone representando uma transformação'} text='Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.'  />
          <Card srcImg={imgBalance} altImg={'Icone representando uma balança'} text='Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.'  />
        </section>
      </section>
    </main>
  );
};

export default Main;