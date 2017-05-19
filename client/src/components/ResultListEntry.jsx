import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';

class ResultListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const college = this.props.college;
    return (
      <div className="card">
        <div className="row">
          <div className="col-md-3">
            <img className="img-responsive cardImages style_prevu_kit" src={college.image_url} />
          </div>
          <Link className="college-name" to={`/college/${college.id}`}>{college.name}</Link>
          <p className="description">{college.description}</p>
        </div>
      </div>
    );
  }
}

export default ResultListEntry;
