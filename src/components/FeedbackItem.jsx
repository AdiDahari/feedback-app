import React, { useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ feedback }) => {
  const { deleteFeedback, setEditFeedback } = useContext(FeedbackContext);
  const { id, rating, text } = feedback;

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => deleteFeedback(id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button className="edit">
        <FaEdit
          onClick={() => setEditFeedback({ feedback, edit: true })}
          color="purple"
        />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackItem;
