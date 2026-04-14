import React, { useContext } from "react";
import { FriendsContext } from "../context/FriendsContext";

const Timeline = () => {
  const { timeline } = useContext(FriendsContext);
  console.log(timeline);
  return (
    <div>
      {timeline.map((time) => (
        <h1>
          <div>{time.name}</div>
        </h1>
      ))}
    </div>
  );
};

export default Timeline;
