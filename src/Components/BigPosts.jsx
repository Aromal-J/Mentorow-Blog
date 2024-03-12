import React from "react";
import { PostDetails } from "../datas";
import BigPostCard from "./BigPostCard";

function BigPosts() {
  return (
    <>
      {" "}
      <h1 className=" text-[24px] font-semibold pt-10 pb-6 text-center md:text-left md:ml-16 ">
          All big posts
        </h1>
      <div className="flex flex-col  justify-center items-center border border-solid border-3 border-t-0 border-r-0 border-l-0 border-[#EAECF059] mb-4">
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mx-16">
          {PostDetails.map((data, index) => (
            <BigPostCard
              key={index}
              imagesrc={data.imagesrc}
              author={data.author}
              date={data.date}
              title={data.title}
              description={data.description}
              points={data.points}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default BigPosts;
