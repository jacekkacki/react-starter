import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

const Column = props => (
  <section className={styles.component}>
    <h3 className={styles.title}>{props.firstColumn}{props.secondColumn}{props.thirdColumn}</h3>
  </section>
);

Column.propTypes = {
  firstColumn: PropTypes.string,
  secondColumn: PropTypes.string,
  thirdColumn: PropTypes.string,
};

export default Column;