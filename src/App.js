import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [feedbacks, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete the feedback?')) {
      setFeedback(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  const addFeedback = (feedback) => {
    feedback.id = uuidv4();
    console.log(feedback);
    const newFeedbacks = [feedback, ...feedbacks];

    setFeedback(newFeedbacks);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm addFeedback={addFeedback} />
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} deleteFeedback={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
