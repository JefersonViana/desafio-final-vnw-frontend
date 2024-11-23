import { Link } from 'react-router-dom';
import s from  './nav.module.scss';

const Nav = () => {
  return (
    <nav className={s.navContainer} >
      <Link to='/' className={s.navLinks}>Inicio</Link>
      <Link to='/livrosDoados' className={s.navLinks}>Livros Doados</Link>
      <Link to='/queroDoar' className={s.navLinks}>Quero Doar</Link>
    </nav>
  );
};

export default Nav;