import React, { useContext, useState } from "react";
import { FriendsContext } from "../context/FriendsContext";

const Timeline = () => {
  const { timeline } = useContext(FriendsContext);
  const [input, setInput] = useState(timeline);
 
  // console.log(type);
  // console.log(timeline);

  const call = timeline.filter((time) => time.type === "Call");

  const text = timeline.filter((time) => time.type === "Text");
 
  const video = timeline.filter((time) => time.type === "Video");

  // console.log(call, text, video);

  const handleClick = (e) => {
    e.preventDefault();
    const data = e.target.value;
   
    if (data === "Call") {
      setInput(call);
      console.log(data);
    } else if (data === "Text") {
      setInput(text);
    } else if (data === "Video") {
      setInput(video);
    } else {
      setInput(timeline);
    }
  };

  if (timeline.length == 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
          alt="No data"
          className="w-42 h-42 opacity-70 mb-4"
        />

        <h2 className="text-xl font-semibold text-gray-700">No Data Found</h2>

        <p className="text-gray-400 mt-2 text-sm max-w-xs">
          There is no data available right now. Please add some data or try
          again later.
        </p>
      </div>
    );
  }
  return (
    <div className="bg-[#F8FAFC] p-4 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-[#1F2937]">
            Timeline
          </h1>

          <select
            onChange={handleClick}
            defaultValue=""
            className="select mt-4 select-bordered w-full sm:w-48"
          >
            <option value="">All</option>

            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {input.map((time, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white rounded-xl shadow-sm hover:shadow-md transition p-4"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 rounded-full bg-gray-100">
                  <img
                    src={
                      (time.type === "Call" && "/call.png") ||
                      (time.type === "Text" && "/text.png") ||
                      (time.type === "Video" && "/video.png")
                    }
                    alt=""
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                  />
                </div>

                <div>
                  <h1 className="text-sm sm:text-base  text-gray-800">
                    <span className="font-bold text-xl">{time.type}</span> with{" "}
                    {time.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {time.time}
                  </p>
                </div>
              </div>

              <div className="hidden sm:block text-xs text-gray-400"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
