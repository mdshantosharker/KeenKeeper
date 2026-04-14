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
    <div className="py-10">
      <h1 className="font-bold text-2xl my-5">Your Friends</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend}></Friend>
        ))}
      </div>
    </div>
  );
};

export default Friends;
