import React from 'react'
import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
async function fetchRepo(name){
    console.log(name)
    const url = `https://api.github.com/repos/bradtraversy/${name}`;
    console.log(url)
   const response = await fetch(url);
   const repo =await response.json()
    return repo;
}
const Repo =async ({name}) => {
    const repo = await fetchRepo(name);
    console.log(repo)
  return (
    <div>
      <Link href="/code/repos" className="btn btn-back ">Back to Repositories</Link>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </div>
  );
   
  
}

export default Repo;