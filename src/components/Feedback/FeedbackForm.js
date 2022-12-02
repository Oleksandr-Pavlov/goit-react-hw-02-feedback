import PropTypes from 'prop-types';
import { Component } from 'react';
import { FeedbackControls } from './FeedbackControls';
import { FeedbackSection } from './FeedbackSection';
import { FeedbackStats } from './FeedbackStats';

export class FeedbackForm extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleFeedback = e => {
    const { name } = e.currentTarget;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <FeedbackSection title="Please leave feedback">
        <FeedbackControls onGetFeedback={this.handleFeedback} />
        <FeedbackStats options={{ good, neutral, bad }} />
      </FeedbackSection>
    );
  }
}
