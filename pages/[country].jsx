import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import React, { useContext, useEffect } from 'react';
import styles from '../styles/pages/Country.module.css';
import { ThemeContext } from '../context/ThemeProvider';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

export async function getStaticPaths() {
  const res = await fetch('https://restcountries.com/v2/all');
  const countries = await res.json();

  const paths = countries.map(country => ({
    params: { country: country.name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://restcountries.com/v2/name/${params.country}?fullText=true`);
  const country = await res.json();
  let borders = [];
  if (country[0].borders) {
    const countryBorders = country[0].borders.join(',');
    const resBorders = await fetch(
      `https://restcountries.com/v2/alpha?codes=${countryBorders}?fields=name`
    );
    borders = await resBorders.json();
  }

  return {
    props: {
      country,
      borders,
    },
  };
}

const Country = ({ country, borders }) => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>{country[0].name}</title>
        <meta name="description" content={`Information about ${country[0].name}`} />
        <meta property="og:title" content={country[0].name} />
        <meta property="og:description" content={`Information about ${country[0].name}`} />
        <meta property="og:image" content={country[0].flag} />
        <meta property="twitter:title" content={country[0].name} />
        <meta property="twitter:description" content={`Information about ${country[0].name}`} />
        <meta property="twitter:image" content={country[0].flag} />
        <meta property="twitter:image:alt" content={`Flag of ${country[0].name}`} />
      </Head>
      <div className={`${styles.Country} ${theme}`}>
        <button className={`${styles.backButton} ${theme}`} onClick={goBack}>
          <FontAwesomeIcon icon={faLongArrowLeft} className={styles['backButton__icon']} />
          Back
        </button>
        <div className={styles.countryDetail}>
          <div className={styles.countryImage}>
            <Image
              width={1200}
              height={720}
              layout="responsive"
              src={country[0].flag}
              alt={`Flag of ${country[0].name}`}
            />
          </div>
          <div className={styles.countryContent}>
            <h2 className={styles['countryContent__title']}>{country[0].name}</h2>
            <div className={styles.countryInfo}>
              <section className={styles['countryInfo__section']}>
                <p className={styles['countryInfo__parraph']}>
                  <span className={styles.label}>Native Name:</span> {country[0].nativeName}
                </p>
                <p className={styles['countryInfo__parraph']}>
                  <span className={styles.label}>Population:</span>{' '}
                  {country[0].population.toLocaleString('en-US')}
                </p>
                <p className={styles['countryInfo__parraph']}>
                  <span className={styles.label}>Region:</span> {country[0].region}
                </p>
                <p className={styles['countryInfo__parraph']}>
                  <span className={styles.label}>Sub Region:</span> {country[0].subregion}
                </p>
                <p className={styles['countryInfo__parraph']}>
                  <span className={styles.label}>Capital:</span> {country[0].capital}
                </p>
              </section>
              <section className={styles['countryInfo__section']}>
                <p className={styles['countryInfo__parraph']}>
                  <span className={styles.label}>Top Level Domain:</span>{' '}
                  {country[0].topLevelDomain}
                </p>
                <p className={styles['countryInfo__parraph']}>
                  <span className={styles.label}>Currencies:</span>{' '}
                  {country[0].currencies?.map(
                    (currency, i, arr) => `${currency.name}${arr.length - 1 !== i ? ', ' : ''}`
                  )}
                </p>
                <p className={styles['countryInfo__parraph']}>
                  <span className={styles.label}>Languages:</span>{' '}
                  {country[0].languages?.map(
                    (language, i, arr) => `${language.name}${arr.length - 1 !== i ? ', ' : ''}`
                  )}
                </p>
              </section>
            </div>
            <div className={styles.borderCountries}>
              <h3 className={styles['borderCountries__title']}>Border Countries:</h3>
              {borders?.map((border, key) => (
                <Link href={`/${border.name}`} key={`borderCountry-link-${key}`}>
                  <a className={`${styles['borderCountries__link']} ${theme}`}>{border.name}</a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
