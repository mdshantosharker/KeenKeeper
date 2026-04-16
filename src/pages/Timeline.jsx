import React, { useContext, useState } from "react";
import { FriendsContext } from "../context/FriendsContext";

const Timeline = () => {
  const { timeline } = useContext(FriendsContext);
  const [input, setInput] = useState(timeline);
  // console.log(type);
  // console.log(timeline);

  const call = timeline.filter((time) => time.type === "Call");
  console.log(call);
  const text = timeline.filter((time) => time.type === "Text");
  console.log(text);
  const video = timeline.filter((time) => time.type === "Video");
  console.log(video);
  // console.log(call, text, video);

  const handleClick = (e) => {
    e.preventDefault();
    const data = e.target.value;
    if (data === "Call") {
      setInput(call);
      console.log(data);
    }
    else if (data === "Text") {
      setInput(text);
    }
    else  {
      setInput(video);
    }
  };
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
            <option value="" disabled>
              Filter timeline
            </option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {input.map((time) => (
            <div
              key={time.id}
              className="flex items-center justify-between bg-white rounded-xl shadow-sm hover:shadow-md transition p-4"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 rounded-full bg-gray-100">
                  <img
                    src={
                      (time.type === "Call" && "/src/assets/call.png") ||
                      (time.type === "Text" && "/src/assets/text.png") ||
                      (time.type === "Video" && "/src/assets/video.png")
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
