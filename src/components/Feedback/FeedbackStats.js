import PropTypes from 'prop-types';
import css from '../Feedback/FeedbackStats.module.css';
import { FeedbackNotification } from './FeedbackNotification';

export const FeedbackStats = ({ options: { good, neutral, bad } }) => {
  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);

  if (total > 0)
    return (
      <>
        <h2>Statistics</h2>
        <p>
          Good: <span className={css.stat}>{good}</span>
        </p>
        <p>
          Neutral: <span className={css.stat}>{neutral}</span>
        </p>
        <p>
          Bad: <span className={css.stat}>{bad}</span>
        </p>
        <p>
          Total: <span className={css.stat}>{total}</span>
        </p>
        <p>
          Positive feedback:{' '}
          <span className={css.stat}>{positivePercentage}%</span>
        </p>
      </>
    );

  return <FeedbackNotification message="No feedback given" />;
};

FeedbackStats.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
  }).isRequired
}
