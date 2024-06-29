import css from './SearchBox.module.css';

export default function SearchBox({ value, onSearch }) {
  return (
    <div className={css.searchWrap}>
      <label className={css.searchLabel} htmlFor="name">
        Find contacts by name
      </label>
      <input
        className={css.searchInput}
        value={value}
        type="text"
        name="name"
        onChange={event => onSearch(event.target.value)}
      />
    </div>
  );
}
