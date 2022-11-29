import { FeedbackForm } from "./Feedback/FeedbackForm";

export const App = () => {
  return (
    <FeedbackForm
      good={0}
      neutral={0}
      bad={0}
      total={0}
      positivePercentage={0} />
  );
};
