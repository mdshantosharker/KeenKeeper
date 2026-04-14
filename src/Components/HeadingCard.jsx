import React, { use } from "react";

const cardFetch = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const cardPromise = cardFetch();
const HeadingCard = () => {
  const cards = use(cardPromise);
  console.log(cards);
  return (
    <div className="grid lg:grid-cols-4 lg:gap-10 gap-5 grid-cols-2  p-2 text-center">
      <div className="card bg-base-100   shadow-sm">
        <div className="card-body ">
          <h2 className=" text-2xl font-bold">{cards.length}</h2>
          <p>Total Friends</p>
        </div>
      </div>

      <div className="card bg-base-100   shadow-sm">
        <div className="card-body ">
          <h2 className="text-2xl font-bold">3</h2>
          <p>On Track</p>
        </div>
      </div>

      <div className="card bg-base-100  shadow-sm">
        <div className="card-body">
          <h2 className="text-2xl font-bold">6</h2>
          <p>Need Attention</p>
        </div>
      </div>

      <div className="card bg-base-100  shadow-sm">
        <div className="card-body">
          <h2 className="text-2xl font-bold">12</h2>
          <p>Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default HeadingCard;
