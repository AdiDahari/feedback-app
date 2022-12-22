import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';

const App = () => {
  const [feedbacks, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete the feedback?')) {
      setFeedback(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} deleteFeedback={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
