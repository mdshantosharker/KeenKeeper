import React, { useContext } from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { FriendsContext } from "../context/FriendsContext";

const Stats = () => {
  const { timeline } = useContext(FriendsContext);
  console.log(timeline.type);

  const call = timeline.filter((time) => time.type == "Call");
  const callLength = call.length;
  // console.log('call',call);
  const text = timeline.filter((time) => time.type == "Text");
  const textLength = text.length;
  // console.log('text',text);
  const video = timeline.filter((time) => time.type == "Video");
  const videoLength = video.length;
  // console.log('video',video);

  const data = [
    { name: "Call", value: callLength, fill: "#244D3F" },
    { name: "Text", value: textLength, fill: "#7E35E1" },
    { name: "Video", value: videoLength, fill: "#37A163" },
  ];

  return (
    <div className="bg-base-300 p-4 sm:p-6 md:p-10">
      <h1 className="font-bold text-2xl  md:text-5xl text-center md:text-left">
        Friendship Analytics
      </h1>

      <div className="bg-white shadow-2xl rounded-2xl mt-5 px-4 sm:px-8 md:px-20 pt-5 pb-10 md:pb-20">
        <p className="text-gray-400 text-center md:text-left mb-4">
          By Interaction Type
        </p>

        <div className="flex justify-center items-center w-full h-62.5 sm:h-75 md:h-100">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius="60%"
                outerRadius="80%"
                cornerRadius={10}
                paddingAngle={4}
                dataKey="value"
                isAnimationActive={true}
              />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;
