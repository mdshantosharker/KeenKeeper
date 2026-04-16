import React, { useContext } from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { FriendsContext } from "../context/FriendsContext";

const Stats = () => {
  const { timeline } = useContext(FriendsContext);
  // console.log(timeline.type);

  const call = timeline.filter((time) => time.type == "Call");
  const callLength = call.length;

  const text = timeline.filter((time) => time.type == "Text");
  const textLength = text.length;

  const video = timeline.filter((time) => time.type == "Video");
  const videoLength = video.length;

  const data = [
    { name: "Call", value: callLength, fill: "#244D3F" },
    { name: "Text", value: textLength, fill: "#7E35E1" },
    { name: "Video", value: videoLength, fill: "#37A163" },
  ];

  return (
    <div className="bg-base-300">
      <div className=" p-4 container w-11/12 mx-auto sm:p-6 md:p-10">
        <h1 className="font-bold text-2xl  md:text-5xl text-center md:text-left">
          Friendship Analytics
        </h1>

        {timeline.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
              alt="No data"
              className="w-24 h-24 opacity-70 mb-4"
            />

            <h2 className="text-xl font-semibold text-gray-700">
              No Data Found
            </h2>

            <p className="text-gray-400 mt-2 text-sm max-w-xs">
              There is no data available right now. Please add some data or try
              again later.
            </p>
          </div>
        ) : (
          <div className="bg-white shadow-2xl rounded-2xl mt-5 px-4 sm:px-8 md:px-20 pt-5 pb-10 md:pb-20">
            <p className="text-gray-400 text-center md:text-left mb-4">
              By Interaction Type
            </p>

            <div className="flex justify-center items-center w-full h-62.5 sm:h-75 md:h-100">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    innerRadius="70%"
                    outerRadius="90%"
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
        )}
      </div>
    </div>
  );
};

export default Stats;
