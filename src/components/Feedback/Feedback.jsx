import React from "react";

const Feedback = ({ reactions, total, positive }) => {
  return (
    <div>
      <p>Good: {reactions.good}</p>
      <p>Neutral: {reactions.neutral}</p>
      <p>Bad: {reactions.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
};

export default Feedback;
