import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Survey from './Survey.jsx';
import Results from './Results.jsx';
import Header from './Header.jsx';
import Banner from './Banner.jsx';
import Authors from './Authors.jsx';
import axios from 'axios';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colleges: []
    },

    this.sendSurveyInfo = this.sendSurveyInfo.bind(this);
  }

  sendSurveyInfo(userData) {
    console.log('axios data:', userData);
    userData.size = userData.size.split('-');
    axios({
      url: '/api/colleges/suggestions',
      method: 'POST',
      data: userData,
    })
      .then ((results) => {
        this.setState({
          colleges: results.data
        });
        console.log('axios results: ', results);
      })
      .catch ((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container-fluid-fullwidth">
        <Header />
        <Banner />
        <div className="container-fluid">
          <Survey sendSurveyInfo = {this.sendSurveyInfo}/>
        </div>
        <div className="container-fluid">
          <Results colleges = {this.state.colleges}/>
        </div>
        <Authors />
        <div className = "container-fluid-fullwidth">
          <div className="navbar-default navbar-fixed-bottom">Made by Farrah Bousetta, Arseniy Kotov, and Helen Tang</div>
        </div>
      </div>
    );
  }
}

export default Layout;
