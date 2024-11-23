import Logo from "../logo/Logo";
import Nav from "../nav/Nav";
import Search from "../search/Search";
import s from  './header.module.scss';


const Header = () => {
  return (
    <header className={s.headerContainer}>
      <Logo />
      <Nav />
      <Search />
    </header>
  );
};

export default Header;