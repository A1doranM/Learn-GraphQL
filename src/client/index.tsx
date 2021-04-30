import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const Root: React.FC = () => {
  return (
    <ApolloProvider client={ client }>
      <Router>
        <Switch>
          <Route path="/">
            <div>AUTH STARTER</div>
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root/>,
  document.querySelector('#root')
);
