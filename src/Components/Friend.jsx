import React from "react";
import { Link } from "react-router";

const Friend = ({ friend }) => {
  const { picture, name, days_since_contact, category, status } = friend;
  //
  return (
   

    <Link
      to={`/friendsDetails/${friend.id}`}
      className="card bg-base-100   shadow-sm"
    >
      <div className="card-body text-center items-center">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={picture} />
          </div>
        </div>
        <h1 className="font-semibold text-2xl">{name}</h1>
        <p className="text-[#64748B] text-[12px]">{days_since_contact}d ago</p>
        <div className="flex justify-center flex-col items-center gap-2">
          <div className="bg-[#CBFADB] w-16 p-1 text-center rounded-4xl">
            <p className="text-[#244D3F]">{category}</p>
          </div>
          <div
            className={`p-1 text-white w-24 rounded-4xl ${
              status === "active"
                ? "bg-[#244D3F]"
                : status === "overdue"
                  ? "bg-[#EF4444]"
                  : "bg-[#EFAD44]"
            }`}
          >
            <p>
              {(status === "Almost Due" && "Almost Due") ||
                (status === "active" && "On-Tack") ||
                (status === "overdue" && "Overdue")}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Friend;
