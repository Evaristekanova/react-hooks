import React from 'react';

const Input = ({ colorValue, setColorValue }) => {
  return (
    <form action="" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="">Add Color Value:</label>
      <input
        placeholder="Add Color Value"
        type="text"
        required
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
      />
    </form>
  );
};

export default Input;
