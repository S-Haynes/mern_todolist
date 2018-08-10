import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import Items from "./containers/Items/Items";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <Items />
      </Layout>
    );
  }
}

export default App;
