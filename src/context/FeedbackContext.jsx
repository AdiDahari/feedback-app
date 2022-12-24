import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);
  const [editFeedback, setEditFeedback] = useState({
    feedback: {},
    edit: false,
  });

  const addFeedback = (feedback) => {
    feedback.id = uuidv4();
    setFeedbacks([feedback, ...feedbacks]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  const updateFeedback = (newFeedback) => {
    setFeedbacks(
      feedbacks.map((feedback) =>
        feedback.id === newFeedback.id ? newFeedback : feedback
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        editFeedback,
        addFeedback,
        deleteFeedback,
        updateFeedback,
        setEditFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
