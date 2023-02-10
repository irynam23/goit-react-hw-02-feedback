import { Component } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    return (
      <div className={css.wrap}>
        {this.props.options.map(option => (
          <button
            id={option}
            key={option}
            onClick={this.props.onLeaveFeedback}
            className={css.btn}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
