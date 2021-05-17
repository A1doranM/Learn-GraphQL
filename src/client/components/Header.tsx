import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import * as React from 'react';

const getCurrentUser = gql`
    {
        user{
            id
            email
        }
    }
`;


const Header: React.FC = (props) => {
  const { loading, data } = useQuery(getCurrentUser);

  console.log(loading, data);

  return (
    <header>
      <button>Sign in</button>
      <button>Sign up</button>
    </header>
  );
}

export default Header;