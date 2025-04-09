import React from "react";

const Feedback = ({ reactions, total }) => {
  return (
    <div>
      <p>Good: {reactions.good}</p>
      <p>Neutral: {reactions.neutral}</p>
      <p>Bad: {reactions.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {Math.round((reactions.good / total) * 100) || 0}%</p>
    </div>
  );
};

export default Feedback;
