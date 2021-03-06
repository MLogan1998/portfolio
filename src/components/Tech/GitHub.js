import React from 'react';
import moment from 'moment';
import githubKey from './githubKey.json';

export const GitHub = (props) => {
  const gitHubActivity = props.gitHubData ? props.gitHubData.map(((event) => {
    if (event.type === 'PullRequestEvent' && event.payload.action === 'closed') {
      const formattedDate = moment(event.created_at).format('MMMM Do, YYYY');
      return <div className="github__action" key={event.id}>
                <a href={event.payload.pull_request.html_url} target="_blank" rel="noopener noreferrer"><p className="github__action--item">{event.payload.pull_request.head.repo.name} <i className="fas fa-external-link-alt github-link-alt"></i></p></a>
                <p className="github__action--item">{formattedDate}</p>
            </div>;
    } return '';
  })) : '';

  return (
      <div className="git_container" style={{ borderLeft: `13px solid ${props.color}` }}>
        <h1 className="secondary_heading" style={{ color: props.color }}>Recent Pull Requests</h1>
        {gitHubActivity}
        <p className="footer-text"><span style={{ color: props.color }}>*</span> Data pulled from GitHub API</p>
      </div>
  );
};
