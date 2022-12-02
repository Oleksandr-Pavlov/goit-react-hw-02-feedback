import PropTypes from 'prop-types';

export const FeedbackNotification = ({ message }) => {
  return <p>{message}</p>;
};

FeedbackNotification.propTypes = {
  message: PropTypes.string.isRequired
}
