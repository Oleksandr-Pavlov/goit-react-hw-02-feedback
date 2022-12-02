import PropTypes from 'prop-types';
import css from '../Feedback/FeedbackControls.module.css';

export const FeedbackControls = ({ onGetFeedback }) => {
  return (
    <div className={css.buttonWrapper}>
      <button
        type="button"
        name="good"
        onClick={onGetFeedback}
        className={css.button}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        onClick={onGetFeedback}
        className={css.button}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        onClick={onGetFeedback}
        className={css.button}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackControls.propTypes = {
  onGetFeedback: PropTypes.func.isRequired,
}
