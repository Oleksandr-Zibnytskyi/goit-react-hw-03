import css from "./SearchBox.module.css";

function SearchBox({ value, onFilter }) {
  return (
    <div className={css.box}>
      <input className={css.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;