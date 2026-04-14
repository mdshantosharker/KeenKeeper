import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { FriendsContext } from "../context/FriendsContext";

const FriendsDetails = () => {
  const { id } = useParams();
  const friends = useLoaderData();
  const expectedFriends = friends.find((friend) => friend.id == id);
  // console.log(expectedFriends);

  const { timeline, setTimeLine } = useContext(FriendsContext);

  const handleCall = (expectedFriends) => {
    setTimeLine([...timeline, expectedFriends]);
  };
  const handleText = (expectedFriends) => {
    setTimeLine([...timeline, expectedFriends]);
  };
  const handleVideo = (expectedFriends) => {
    setTimeLine([...timeline, expectedFriends]);
  };
  // console.log(timeline);
  return (
    <div className="text-center">
      FriendsDetails{expectedFriends.name}
      <div className="flex flex-col gap-2">
        <button onClick={() => handleCall(expectedFriends)} className="btn">
          call
        </button>
        <button onClick={() => handleText(expectedFriends)} className="btn">
          text
        </button>
        <button onClick={() => handleVideo(expectedFriends)} className="btn">
          video
        </button>
      </div>
    </div>
  );
};

export default FriendsDetails;
