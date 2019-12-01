import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    adresImg: PropTypes.string.isRequired,
    children: PropTypes.node,
    firstColumn: PropTypes.string.isRequired,
    secondColumn: PropTypes.string.isRequired,
    thirdColumn: PropTypes.string.isRequired,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }
  
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title}
              adresSrcImg={this.props.adresImg} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column firstColumn='Animals' />
          <Column secondColumn='Plants' />
          <Column thirdColumn='Minerals' />
        </div>
      </section>
    )
  }
}

export default List;
