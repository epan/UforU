import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
