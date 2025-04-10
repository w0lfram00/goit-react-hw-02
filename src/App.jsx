import { useEffect, useRef, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const calcTotal = () => {
    return +(reactions.good + reactions.neutral + reactions.bad);
  };

  const [reactions, setReactions] = useState(
    JSON.parse(localStorage.getItem("reactions-stored")) ?? {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );
  useEffect(() => {
    localStorage.setItem("reactions-stored", JSON.stringify(reactions));
  }, [reactions]);

  const handleAddReaction = (reactionName) => {
    setReactions({ ...reactions, [reactionName]: reactions[reactionName] + 1 });
  };

  const handleResetReactions = () => {
    setReactions({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        addReaction={handleAddReaction}
        resetReactions={handleResetReactions}
        total={calcTotal()}
      />
      {calcTotal() != 0 && (
        <Feedback
          reactions={reactions}
          total={calcTotal()}
          posItive={Math.round((reactions.good / calcTotal()) * 100)}
        />
      )}
      {!calcTotal() && <Notification />}
    </>
  );
}

export default App;
