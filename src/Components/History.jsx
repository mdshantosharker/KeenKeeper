import React from "react";

const History = ({ time }) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition">
      <div className="flex items-center gap-4">
        <img
          className="w-6 h-6"
          src={
            time.type === "call"
              ? "/src/assets/call.png"
              : time.type === "text"
                ? "/src/assets/text.png"
                : "/src/assets/video.png"
          }
          alt=""
        />

        <div>
          <h2 className="text-lg font-semibold text-gray-800">{time.type}</h2>
          <p className="text-xs text-gray-500">{time.bio}</p>
        </div>
      </div>

      <p className="text-xs text-gray-400 whitespace-nowrap">{time.time}</p>
    </div>
  );
};

export default History;
