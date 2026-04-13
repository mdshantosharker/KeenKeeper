import React, { useEffect, useState } from "react";
import Friend from "./Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setFriends(data);
    };
    fetchFriends();
  }, []);
//   console.log(friends);
  return (
    <div className="grid grid-cols-4 gap-20 p-5 my-10 border-5 border-indigo-400">
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
};

export default Friends;
