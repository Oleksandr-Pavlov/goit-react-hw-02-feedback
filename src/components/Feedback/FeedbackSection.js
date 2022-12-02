import PropTypes from 'prop-types';

export const FeedbackSection = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

FeedbackSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}
