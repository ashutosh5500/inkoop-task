import "./App.css";
import Main from "./components/Main/Main";
import { Component } from "react";
import Layout from "./container/Layout";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Layout />
        <Main />
      </div>
    );
  }
}

export default App;
