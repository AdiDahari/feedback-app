import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import AboutIconLink from './components/AboutIconLink';

import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import AboutPage from './pages/AboutPage';

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
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm addFeedback={addFeedback} />
                <FeedbackStats feedbacks={feedbacks} />
                <FeedbackList
                  feedbacks={feedbacks}
                  deleteFeedback={deleteFeedback}
                />
                <AboutIconLink />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
