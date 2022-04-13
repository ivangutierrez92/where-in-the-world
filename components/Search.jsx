import React from 'react';
import styles from '../styles/components/Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ value, setValue, placeholder, theme }) => {
  const onChangeValue = e => {
    setValue(e.target.value);
  };
  return (
    <div className={`${styles.Search} ${theme}`}>
      <div className={styles['Search__icon']}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        type="text"
        value={value}
        onChange={onChangeValue}
        placeholder={placeholder}
        className={`${styles['Search__input']} ${theme}`}
      />
    </div>
  );
};

export default Search;
