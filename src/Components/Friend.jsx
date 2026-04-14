import React from "react";
import { Link } from "react-router";

const Friend = ({ friend }) => {
  console.log(friend);
  const { picture, name, days_since_contact,category } = friend;
  // to={`/friendsDetails/${friend.id}`}
  return (
    // <Link  className="card bg-base-100  shadow-sm">
    //   <figure>
    //     <img
    //       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    //       alt="Shoes"
    //     />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">Card Title</h2>
    //     <p>
    //       A card component has a figure, a body part, and inside body there are
    //       title and actions parts
    //     </p>
    //     <div className="card-actions justify-end">
    //       <button className="btn btn-primary">Buy Now</button>
    //     </div>
    //   </div>
    // </Link>

    <div className="card bg-base-100   shadow-sm">
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
          <div className="bg-[#EFAD44] p-1 text-white w-24 rounded-4xl">
            <p>Almost Due</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
