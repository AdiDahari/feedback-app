import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

const FeedbackList = () => {
  const { feedbacks } = useContext(FeedbackContext);

  if (feedbacks.length === 0) {
    return <div>No feedbacks yet.</div>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbacks.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={feedback.id} feedback={feedback} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
