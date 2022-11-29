import css from '../Feedback/FeedbackControls.module.css';

export const FeedbackControls = ({
  onGoodFeedback,
  onNeutralFeedback,
  onBadFeedback,
}) => {
  return (
    <div className={css.buttonWrapper}>
      <button type="button" onClick={onGoodFeedback} className={css.button}>
        Good
      </button>
      <button type="button" onClick={onNeutralFeedback} className={css.button}>
        Neutral
      </button>
      <button type="button" onClick={onBadFeedback} className={css.button}>
        Bad
      </button>
    </div>
  );
};