import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { FriendsContext } from "../context/FriendsContext";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive, FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { PiVideoCameraBold } from "react-icons/pi";
import { FaHistory } from "react-icons/fa";

const FriendsDetails = () => {
  const { id } = useParams();
  const friends = useLoaderData();
  const expectedFriends = friends.find((friend) => friend.id == id);

  const { timeline, setTimeLine } = useContext(FriendsContext);

  const handleCall = (expectedFriends) => {
   const now = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
    setTimeLine([...timeline, { ...expectedFriends, type: "call", time: now }]);
  };
  const handleText = (expectedFriends) => {
    const now = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

    setTimeLine([...timeline, { ...expectedFriends, type: "text", time: now }]);
  };
  const handleVideo = (expectedFriends) => {
   const now = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

    setTimeLine([
      ...timeline,
      { ...expectedFriends, type: "video", time: now },
    ]);
  };
  // console.log(timeline);
  return (
    <div className="bg-[#F8FAFC] p-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-[30%] space-y-5">
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="flex flex-col items-center text-center p-6 space-y-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#E2E8F0]">
                <img
                  src={expectedFriends.picture}
                  alt={expectedFriends.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                {expectedFriends.name}
              </h2>

              <p className="text-sm text-gray-500">
                {expectedFriends.days_since_contact} days ago
              </p>

              <div className="flex flex-col items-center gap-2">
                <span className="bg-[#CBFADB] text-[#244D3F] text-xs px-3 py-1 rounded-full font-medium">
                  {expectedFriends.category}
                </span>

                <span
                  className={`text-xs px-4 py-1 rounded-full text-white font-medium ${
                    expectedFriends.status === "active"
                      ? "bg-[#244D3F]"
                      : expectedFriends.status === "overdue"
                        ? "bg-[#EF4444]"
                        : "bg-[#EFAD44]"
                  }`}
                >
                  {expectedFriends.status === "active"
                    ? "On-Track"
                    : expectedFriends.status === "overdue"
                      ? "Overdue"
                      : "Almost Due"}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 transition">
              <RiNotificationSnoozeLine />
              Snooze 2 weeks
            </button>

            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 transition">
              <FiArchive />
              Archive
            </button>

            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-red-50 text-red-500 transition">
              <RiDeleteBin6Line />
              Delete
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[70%] space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow-sm text-center p-5">
              <h2 className="text-2xl font-bold">62</h2>
              <p className="text-sm text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm text-center p-5">
              <h2 className="text-2xl font-bold">30</h2>
              <p className="text-sm text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm text-center p-5">
              <h2 className="text-lg font-bold">Feb 27, 2026</h2>
              <p className="text-sm text-gray-500">Next Due</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-5 flex justify-between items-center">
            <div>
              <h1 className="text-[#244D3F] font-semibold text-lg">
                Relationship Goal
              </h1>
              <p className="text-sm text-gray-600">
                Connect every
                <span className="font-bold text-gray-800"> 30 days</span>
              </p>
            </div>
            <button className="text-sm w-20 btn px-3 py-1 rounded-sm bg-gray-100 hover:bg-gray-200">
              Edit
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5">
            <h1 className="text-[#1F2937] text-lg font-semibold">
              Quick Check-In
            </h1>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <button
                onClick={() => handleCall(expectedFriends)}
                className="flex flex-col items-center gap-2 py-4 rounded-xl bg-[#F1F5F9] hover:bg-[#244D3F] hover:text-white transition group"
              >
                <FiPhoneCall className="text-2xl group-hover:scale-110 transition" />
                <span className="text-sm">Call</span>
              </button>

              <button
                onClick={() => handleText(expectedFriends)}
                className="flex flex-col items-center gap-2 py-4 rounded-xl bg-[#F1F5F9] hover:bg-[#3B82F6] hover:text-white transition group"
              >
                <MdOutlineTextsms className="text-2xl group-hover:scale-110 transition" />
                <span className="text-sm">Text</span>
              </button>

              <button
                onClick={() => handleVideo(expectedFriends)}
                className="flex flex-col  items-center gap-2 py-4 rounded-xl bg-[#F1F5F9] hover:bg-[#EF4444] hover:text-white transition group"
              >
                <PiVideoCameraBold className="text-2xl group-hover:scale-110 transition" />
                <span className="text-sm">Video</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-lg font-semibold text-[#1F2937]">
                  Recent Interactions
                </h1>

                <button className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                  <FaHistory />
                  Full History
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-[#E0F2FE] text-[#0284C7]">
                    <MdOutlineTextsms className="text-xl" />
                  </div>

                  <div>
                    <h2 className="text-sm font-semibold text-gray-800">
                      Text
                    </h2>
                    <p className="text-xs text-gray-500">
                      Asked for career advice
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-400">Jan 28, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
