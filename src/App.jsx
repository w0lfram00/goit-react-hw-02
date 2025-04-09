import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
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
      />
      <Feedback
        reactions={reactions}
        total={reactions.good + reactions.neutral + reactions.bad}
      />
    </>
  );
}

export default App;
