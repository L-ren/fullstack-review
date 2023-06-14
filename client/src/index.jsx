import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const App = () => {

  const [repos, setRepos] = useState([]);
  const [term, setTerm] = useState('')

  useEffect(() => {
    console.log(`useEffect called`);
    $.ajax({
      method: 'GET',
      url: 'http://127.0.0.1:1128/repos', // I SHOULDNT HAVE HARDCODED THIS??
      // dataType: 'application/json',
      success: (responseData) => {
        let response = JSON.parse(responseData);
        setRepos(response);
      }
    });
  }, [repos])

  const onChange = (e) => {
    setTerm(e.target.value);
  }
  const onSearch = (e) => {
    console.log(`${term} was searched`);
    // make POST request github API
    $.ajax({
      method: 'POST',
      url: 'http://127.0.0.1:1128/repos', // I SHOULDNT HAVE HARDCODED THIS
      contentType: 'application/json',
      data: JSON.stringify({term})
      // success: (responseData) => {console.log(`ajax request sent successfully`)}
    });
  }

  return (
    <div>
      <h1>Github Fetcher</h1>
      <Search onSearch={onSearch} onChange={onChange}/>
      <RepoList repos={repos}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));