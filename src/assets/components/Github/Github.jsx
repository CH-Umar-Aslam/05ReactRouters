import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export const Github = () => {
  const data = useLoaderData(); // geeting data from loader
  return (
    <div className="h-40 bg-gray-600 flex">
      <img src={data.avatar_url} alt="github" width={300} />
      <h1 className="text-3xl p-4">Github Followers: {data.followers}</h1>;
    </div>
  );
};
export const githubDataLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
//  loader means on hover fetching should start
// useLoaderData loads data returning from loader fuction iven in route
