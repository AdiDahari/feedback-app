import React, { useState } from 'react';

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(5);

  const handleRatingChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  return (
    <ul className="rating">
      <li>
        <input
          id="rating-1"
          type="radio"
          name="rating"
          value="1"
          checked={selected === 1}
          onChange={handleRatingChange}
        />
        <label htmlFor="rating-1">1</label>
      </li>
      <li>
        <input
          id="rating-2"
          type="radio"
          name="rating"
          value="2"
          checked={selected === 2}
          onChange={handleRatingChange}
        />
        <label htmlFor="rating-2">2</label>
      </li>
      <li>
        <input
          id="rating-3"
          type="radio"
          name="rating"
          value="3"
          checked={selected === 3}
          onChange={handleRatingChange}
        />
        <label htmlFor="rating-3">3</label>
      </li>
      <li>
        <input
          id="rating-4"
          type="radio"
          name="rating"
          value="4"
          checked={selected === 4}
          onChange={handleRatingChange}
        />
        <label htmlFor="rating-4">4</label>
      </li>
      <li>
        <input
          id="rating-5"
          type="radio"
          name="rating"
          value="5"
          checked={selected === 5}
          onChange={handleRatingChange}
        />
        <label htmlFor="rating-5">5</label>
      </li>
      <li>
        <input
          id="rating-6"
          type="radio"
          name="rating"
          value="6"
          checked={selected === 6}
          onChange={handleRatingChange}
        />
        <label htmlFor="rating-6">6</label>
      </li>
      <li>
        <input
          id="rating-7"
          type="radio"
          name="rating"
          value="7"
          checked={selected === 7}
          onChange={handleRatingChange}
        />
        <label htmlFor="rating-7">7</label>
      </li>
      <li>
        <input
          id="rating-8"
          type="radio"
          name="rating"
          value="8"
          checked={selected === 8}
          onChange={handleRatingChange}
        />
        <label htmlFor="rating-8">8</label>
      </li>
      <li>
        <input
          id="rating-9"
          type="radio"
          name="rating"
          value="9"
          checked={selected === 9}
          onChange={handleRatingChange}
        />

        <label htmlFor="rating-9">9</label>
      </li>
      <li>
        <input
          id="rating-10"
          type="radio"
          name="rating"
          value="10"
          checked={selected === 10}
          onChange={handleRatingChange}
        />
        <label htmlFor="rating-10">10</label>
      </li>
    </ul>
  );
};

export default RatingSelect;
