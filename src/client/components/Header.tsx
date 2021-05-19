import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';

export const getCurrentUser = gql`
    {
        user{
            id
            email
        }
    }
`;

const logoutMutation = gql`
    mutation {
        logout{
            id
            email
        }
    }
`;


const Header: React.FC = (props) => {
  const { loading, data } = useQuery(getCurrentUser);
  const [logout, result] = useMutation<{ logoutData: { id: string, email: string } }>(logoutMutation);
  const history = useHistory();

  const onLogout = () => {
    logout({
      refetchQueries: [{
        query: getCurrentUser
      }]
    }).then((_) => {
      history.push('/');
    });
  }

  const renderButtons = () => {

    if (loading) return;

    if (data.user) {
      return (
        <li>
          <a href="#" onClick={ onLogout }>Logout</a>
        </li>
      );
    }

    return (
      <>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </>
    )
  }

  return (
    <header>
      <nav className="nav-wrapper">
        <Link to="/" className="nav-wrapper__brand-logo left">Home</Link>
        <ul className="right">
          { renderButtons() }
        </ul>
      </nav>
    </header>
  );
}

export default Header;