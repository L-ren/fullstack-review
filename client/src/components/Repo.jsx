import React from 'react';

const Repo = ({repo, count}) => {
  if (!repo.description) {
    repo.description = `No description available`;
  }
  // console.log(repo);
  return (<div>
    <a href={repo.htmlUrl} target='_blank'><h3>{count}. {repo.name}</h3></a>
    <h4>{repo.ownerName}</h4>
    <span>{repo.description}</span>
  </div>)
};

export default Repo;