import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import App from './components/App';
import LoginForm from './components/LoginForm';

const link = new HttpLink({
  uri: '/graphql',
  credentials: 'same-origin',
});

const client = new ApolloClient({
  // @ts-ignore
  link,
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const Root: React.FC = () => {
  return (
    <ApolloProvider client={ client }>
      <Router>
        <Switch>
          <Route path="/signup">
            <App>
              <LoginForm/>
            </App>
          </Route>
          <Route path="/login">
            <App>
              <LoginForm/>
            </App>
          </Route>
          <Route path="/">
            <App/>
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
