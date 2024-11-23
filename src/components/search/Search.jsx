import s from './search.module.scss';
import search from '../../assets/search.png';

const Search = () => {
  return (
    <section className={s.searchContainer}>
      <img src={search} alt="campo de busca" className={s.searchImg} />
      <input type="search" name="search" className={s.searchInput} />
    </section>
  );
};

export default Search;