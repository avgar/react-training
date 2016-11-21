import React, {PropTypes, Component} from 'react';
import s from './Counter.scss';
import {translate} from 'react-i18next';

class Counter extends Component {
  static propTypes = {
    value: PropTypes.number,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    t: PropTypes.func
  }

  render() {
    const {value, onIncrement, onDecrement, t} = this.props;
    return (
      <div>
        <p data-hook="counter-value" className={s.mainColor}>{t('counter.apples', {count: value})}</p>
        <button data-hook="increment-button" className="increment-button" onClick={onIncrement}>+</button>
        <button data-hook="decrement-button" className="decrement-button" onClick={onDecrement}>-</button>
      </div>
    );
  }
}

export default translate(null, {wait: true})(Counter);


