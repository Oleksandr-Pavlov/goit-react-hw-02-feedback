import { Component } from 'react';
import { FeedbackNotification } from './FeedbackAbsence';
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
    //
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleGoodFeedback = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutralFeedback = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleBadFeedback = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = Math.round(good / total * 100);

    return (
      <FeedbackSection>
        <FeedbackControls
          onGoodFeedback={this.handleGoodFeedback}
          onNeutralFeedback={this.handleNeutralFeedback}
          onBadFeedback={this.handleBadFeedback}
        />
        {total > 0?  
          <FeedbackStats
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          /> : <FeedbackNotification message="No feedback given"/>
        }
      </FeedbackSection>
    );
  }
}