import React, { useState } from 'react';

const HooksForm1 = () => {
  const [valueChange, setValueChange] = useState('')
  const [valueSubmit, setValueSubmit] = useState('')

  const handleChange = (event) => (
    setValueChange(event.target.value)
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setValueSubmit(event.target.text1.value)
  };

    return (
      <div>
       <h1> React Hooks Form </h1>
        <form data-testid="form" onSubmit={handleSubmit}>
          <label htmlFor="text1">Input Text:</label>
          <input id="text1" onChange={handleChange} type="text" />
          <button type="submit">Submit</button>
        </form>
        <h3>React State:</h3>
          <p>Change: {valueChange}</p>
          <p>Submit Value: {valueSubmit}</p>
        <br />
      </div>
    )
}


export default HooksForm1;
