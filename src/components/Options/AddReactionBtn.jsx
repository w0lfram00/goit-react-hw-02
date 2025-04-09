import React from "react";

const AddReactionBtn = ({ reactionName, addReaction }) => {
  return (
    <div>
      <button onClick={() => addReaction(reactionName.toLowerCase())}>
        {reactionName}
      </button>
    </div>
  );
};

export default AddReactionBtn;
