import React from 'react';
import Repo from './Repo.jsx'

const RepoList = ({ repos }) => {
 var count = 0;
 return (
  <>
  <div>
      {/* <h4> Repo List Component </h4> */}
      {/* There are {X amount in DB} repos. Displaying 25. */}
      There are {repos.length} repos.
    </div>
    <div>
      { repos.map((repo) => {
        count += 1;
        return (<Repo repo={repo} key={repo.id} count={count}/>)
        })}
    </div>
    </>)
  }

export default RepoList;