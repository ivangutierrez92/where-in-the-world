import Head from 'next/head';
import Search from '../components/Search';
import Select from '../components/MySelect';
import styles from '../styles/pages/Home.module.css';
import CountryCard from '../components/CountryCard';
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

export async function getStaticProps() {
  const res = await fetch('https://restcountries.com/v2/all');
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
}

export default function Home({ countries }) {
  const { theme } = useContext(ThemeContext);
  const [searchValue, setSearchValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  let filteredCountries = [];
  let searchedCountries = [];

  if (!selectedValue) {
    filteredCountries = countries;
  } else {
    filteredCountries = countries.filter(country => {
      const countryRegion = country.region.toLowerCase();
      return countryRegion === selectedValue;
    });
  }

  if (searchValue.length >= 1) {
    searchedCountries = filteredCountries.filter(country => {
      return country.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  } else {
    searchedCountries = filteredCountries;
  }

  return (
    <>
      <Head>
        <title>Where in the World</title>
        <meta name="description" content="App to see the countries of the world!" />
        <meta property="og:title" content="Where in the World" />
        <meta property="og:description" content="App to see the countries of the world!" />
        <meta property="og:image" content="social-icon.png" />
        <meta property="twitter:title" content="Where in the World" />
        <meta property="twitter:description" content="App to see the countries of the world!" />
        <meta property="twitter:image" content="social-icon.png" />
        <meta property="twitter:image:alt" content="Icon of the World" />
      </Head>
      <main className={`${styles.main} ${theme}`}>
        <div className={styles.filters}>
          <Search
            placeholder="Search for a country..."
            value={searchValue}
            setValue={setSearchValue}
            theme={theme}
          />
          <Select theme={theme} setValue={setSelectedValue} />
        </div>
        <section className={styles.cardsContainer}>
          {searchedCountries.length ? (
            searchedCountries.map((country, key) => (
              <CountryCard theme={theme} country={country} key={`country-card-${key}`} />
            ))
          ) : (
            <h2>No Results</h2>
          )}
        </section>
      </main>
    </>
  );
}
