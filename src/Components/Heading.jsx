import React from "react";

const Heading = () => {
  return (
    <div className="my-10 text-center border-5 border-red-500">
      <h1>Friends to keep close in your life</h1>
      <p>
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn btn-success">+ Add a Friend</button>
    </div>
  );
};

export default Heading;
