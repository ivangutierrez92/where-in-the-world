import React from 'react';
import styles from '../styles/components/CountryCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const CountryCard = ({ theme, country }) => {
  return (
    <article className={`${styles.Card} ${theme}`}>
      <Link href={`/${country.name.toLowerCase()}`}>
        <a>
          <div>
            <Image
              src={country.flag}
              width={320}
              height={213}
              layout="responsive"
              className={styles['Card__image']}
              alt={`Flag of ${country.name}`}
            />
          </div>
        </a>
      </Link>
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{country.name}</h2>
        <p>
          <span className={styles.label}>Population:</span>{' '}
          {country.population.toLocaleString('en-US')}
        </p>
        <p>
          <span className={styles.label}>Region:</span> {country.region}
        </p>
        <p>
          <span className={styles.label}>Capital:</span> {country.capital}
        </p>
      </div>
    </article>
  );
};

export default CountryCard;
