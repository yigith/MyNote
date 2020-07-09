import React from 'react';
import './style.css';
import Header from 'components/Header'
import Notes from 'components/Notes'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Notes />
      </React.Fragment>
    );
  }

}

export default App;
