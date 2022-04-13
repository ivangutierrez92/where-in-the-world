import React from 'react';
import Select from 'react-select';
import styles from '../styles/components/MySelect.module.css';
import themeMap from '../constants/themeMap';

const options = [
  { value: 'africa', label: 'Africa' },
  { value: 'americas', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
];

const lightStyles = {
  placeholder: provided => ({
    ...provided,
    color: 'hsl(200, 15%, 8%)',
    fontWeight: '600',
    fontSize: '12px',
    '@media (min-width: 775px)': {
      ...provided['@media (min-width: 775px)'],
      fontSize: '14px',
    },
  }),
  option: provided => ({
    ...provided,
    color: 'hsl(200, 15%, 8%)',
    fontWeight: '600',
    fontSize: '12px',
    paddingLeft: '25px',
    '@media (min-width: 775px)': {
      ...provided['@media (min-width: 775px)'],
      fontSize: '14px',
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  control: provided => ({
    ...provided,
    padding: '0 0 0 15px',
    height: '45px',
    color: 'hsl(200, 15%, 8%)',
    fontWeight: '600',
    fontSize: '12px',
    border: 'none',
    boxShadow: '0px 0px 6px 0px hsl(0, 0%, 85%);',
    '@media (min-width: 775px)': {
      ...provided['@media (min-width: 775px)'],
      fontSize: '14px',
      height: '60px',
    },
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: 'hsl(200, 15%, 8%);',
  }),
  clearIndicator: provided => ({
    ...provided,
    color: 'hsl(200, 15%, 8%);',
  }),
};

const darkStyles = {
  placeholder: provided => ({
    ...provided,
    color: 'hsl(0, 0%, 100%)',
    fontWeight: '600',
    fontSize: '12px',
    '@media (min-width: 775px)': {
      ...provided['@media (min-width: 775px)'],
      fontSize: '14px',
    },
  }),
  singleValue: provided => ({
    ...provided,
    color: 'hsl(0, 0%, 100%)',
  }),
  option: (provided, { isFocused, isSelected }) => ({
    ...provided,
    color: 'hsl(0, 0%, 100%)',
    fontWeight: '600',
    fontSize: '12px',
    paddingLeft: '25px',
    backgroundColor: isSelected ? 'blue' : isFocused ? 'hsl(207, 23%, 8%)' : undefined,
    '@media (min-width: 775px)': {
      ...provided['@media (min-width: 775px)'],
      fontSize: '14px',
    },
    ':active': {
      ...provided[':active'],
      backgroundColor: undefined,
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  control: provided => ({
    ...provided,
    padding: '0 0 0 15px',
    height: '45px',
    color: 'hsl(0, 0%, 100%)',
    fontWeight: '600',
    fontSize: '12px',
    border: 'none',
    background: 'hsl(209, 23%, 22%)',
    boxShadow: '0px 0px 6px 0px hsl(207, 23%, 8%)',
    '@media (min-width: 775px)': {
      ...provided['@media (min-width: 775px)'],
      fontSize: '14px',
      height: '60px',
    },
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: 'hsl(0, 0%, 100%)',
    ':hover': {
      ...provided[':hover'],
      color: 'hsl(0, 0%, 100%)',
    },
  }),
  clearIndicator: provided => ({
    ...provided,
    color: 'hsl(0, 0%, 100%)',
    ':hover': {
      ...provided[':hover'],
      color: 'hsl(0, 0%, 100%)',
    },
  }),
  menu: provided => ({
    ...provided,
    background: 'hsl(209, 23%, 22%)',
  }),
};

const MySelect = ({ theme, setValue }) => {
  const onChangeValue = selectedValue => {
    setValue(selectedValue?.value);
  };
  return (
    <div className={styles.Select}>
      <Select
        options={options}
        isClearable
        placeholder="Filter by Region"
        styles={theme === themeMap.dark ? darkStyles : themeMap.light ? lightStyles : null}
        instanceId="select"
        isSearchable={false}
        onChange={onChangeValue}
      />
    </div>
  );
};

export default MySelect;
