import React, { useContext, useEffect, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';

const FeedbackForm = () => {
  const { addFeedback, editFeedback, setEditFeedback, updateFeedback } =
    useContext(FeedbackContext);

  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (editFeedback.edit) {
      setText(editFeedback.feedback.text);
      setRating(editFeedback.feedback.rating);
      setBtnDisabled(false);
    }
  }, [editFeedback]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editFeedback.edit) {
      const newFeedback = {
        id: editFeedback.feedback.id,
        rating,
        text,
      };
      editFeedback.edit
        ? updateFeedback(newFeedback)
        : addFeedback(newFeedback);
      setText('');
      setRating(5);
      setBtnDisabled(true);
      setEditFeedback({ feedback: {}, edit: false });
    } else if (text.trim().length >= 10) {
      const newFeedback = {
        rating,
        text,
      };

      addFeedback(newFeedback);
      setText('');
      setRating(5);
      setBtnDisabled(true);
    }
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    if (newText.trim() === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (newText.trim().length < 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters long');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(newText);
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Rate your Experience</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a Review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
