import React from 'react';
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedbacks, deleteFeedback }) => {
  if (feedbacks.length === 0) {
    return <div>No feedbacks yet.</div>;
  }
  return (
    <div className="feedback-list">
      {feedbacks.map((feedback) => (
        <FeedbackItem
          key={feedback.id}
          feedback={feedback}
          handleDelete={deleteFeedback}
        />
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default FeedbackList;
