import React, { useState } from 'react';

const SurveyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </label>
      <label>
        Feedback:
        <textarea
          value={feedback}
          onChange={(event) => setFeedback(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SurveyForm;
