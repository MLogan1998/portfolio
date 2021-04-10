import React, { useState, useEffect } from 'react';
import moment from 'moment';
import githubKey from './githubKey.json';

export const GitHub = () => {
  const [gitHubData, setGitHubData] = useState([]);

  const getGitHubData = () => (
    fetch(`${gitHubUrl}`, {
      headers: {
        Accept: 'application/json',
        Authorization: `token ${gitHubToken}`,
      },
    })
      .then((response) => response.json())
      .then(setGitHubData)
  );

  useEffect(() => {
    getGitHubData();
  }, []);

  const gitHubToken = githubKey.github.apiKey;
  const gitHubUrl = githubKey.github.url;

  const gitHubActivity = gitHubData ? gitHubData.map(((event) => {
    if (event.type === 'PullRequestEvent') {
      const formattedDate = moment(event.created_at).format('MMMM Do, YYYY');
      return <div className="github__action" key={event.id}>
                <a href={event.payload.pull_request.html_url} target="_blank" rel="noopener noreferrer"><p className="github__action--item">{event.payload.pull_request.head.repo.name} <i className="fas fa-external-link-alt github-link-alt"></i></p></a>
                <p className="github__action--item">{formattedDate}</p>
            </div>;
    } return '';
  })) : '';

  return (
      <div className="git_container">
        <h1 className="secondary_heading">Recent Pull Requests</h1>
        {gitHubActivity}
        <p className="footer-text"><span className="green">*</span> Data pulled from GitHub API</p>
      </div>
  );
};
