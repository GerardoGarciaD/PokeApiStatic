import React from 'react';
import styles from '../styles/pokemonCard.module.css';
import { statsNames } from '../constants/pokemon';

const PokemonStats = ({ stats, mainType }) => {
  return (
    <div className="p-6">
      {stats.map((stat) => (
        <div key={stat.name} className="stat-row flex justify-center ">
          <div
            className={styles['stat-desc']}
            style={{ color: mainType.color }}
          >
            {statsNames[stat.name]}
          </div>
          <p className={styles['stat-number']}>{stat.base_stat}</p>
          <div className={styles['stat-bar']}>
            <div className={styles['bar-outer']}>
              <p
                className={styles['bar-inner']}
                style={{
                  width: `${stat.base_stat}%`,
                  backgroundColor: mainType.color,
                }}
              ></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonStats;
