import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback } ) => {
  return (
    <div className={css.buttonWrapper}>
      <button
        type="button"
        name={options[0]}
        onClick={onLeaveFeedback}
        className={css.button}
      >
        Good
      </button>
      <button
        type="button"
        name={options[1]}
        onClick={onLeaveFeedback}
        className={css.button}
      >
        Neutral
      </button>
      <button
        type="button"
        name={options[2]}
        onClick={onLeaveFeedback}
        className={css.button}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}
