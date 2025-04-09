import React from "react";
import AddReactionBtn from "./AddReactionBtn";
import s from "./Options.module.css";

const Options = ({ addReaction, resetReactions }) => {
  return (
    <div className={s.wrapper}>
      <AddReactionBtn reactionName="Good" addReaction={addReaction} />
      <AddReactionBtn reactionName="Neutral" addReaction={addReaction} />
      <AddReactionBtn reactionName="Bad" addReaction={addReaction} />
      <button onClick={resetReactions}>Reset</button>
    </div>
  );
};

export default Options;
