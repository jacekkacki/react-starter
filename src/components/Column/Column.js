import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.string,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    return (
      <section className={styles.component}>
        
      <h3 className={styles.title}>
        <span className={styles.icon}>
          <Icon name={this.props.icon} />
        </span>
        {this.props.title}
      </h3>

      <div className={styles.cards}>
        {this.props.cards.map(({key, ...cardProps}) => (
          <Card key={key} {...cardProps} />
        ))}
      </div>

      <div className={styles.creator}>
        <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
      </div>

    </section>
    );
  }
}

export default Column;