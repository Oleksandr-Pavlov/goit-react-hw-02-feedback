import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback } ) => {
  return (
    <div className={css.buttonWrapper}>
      {options.map(option => (
        <button
          type="button"
          name={option}
          onClick={onLeaveFeedback}
          className={css.button}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}
