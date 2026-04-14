import React, { useState } from "react";
import { FriendsContext } from "./FriendsContext";

const FriendsProvider = ({ children }) => {
  const [timeline, setTimeLine] = useState([]);

  const info = {
    timeline,
    setTimeLine,
   
  };
  return (
    <FriendsContext.Provider value={info}>{children}</FriendsContext.Provider>
  );
};

export default FriendsProvider;
