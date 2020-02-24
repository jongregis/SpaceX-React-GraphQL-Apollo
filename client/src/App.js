import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launches from "./Components/Launches";
import Launch from "./Components/Launch";
import Home from "./Components/Home";

const client = new ApolloClient({
  uri: "/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/launches" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
