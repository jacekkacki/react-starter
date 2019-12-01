import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

const Column = props => (
  <section className={styles.component}>
    <h3 className={styles.title}>{props.firstColumn}{props.secondColumn}{props.thirdColumn}</h3>
  </section>
);

Column.propTypes = {
  firstColumn: PropTypes.string.isRequired,
  secondColumn: PropTypes.string.isRequired,
  thirdColumn: PropTypes.string.isRequired,
};

export default Column;