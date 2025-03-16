import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Customers'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple React App</h1>
        </header>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>My Power BI Dashboard</h1>
      <iframe title="scms dashboard" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=cb39a852-7fa2-403f-9482-5778b9649763&autoAuth=true&ctid=d988180a-487c-497e-b3d8-ee0146495fcb" frameborder="0" allowFullScreen="true"></iframe>
    </div>
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/customerlist"/>
                )}/>
                 <Route exact path='/customerlist' component={Customers} />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
