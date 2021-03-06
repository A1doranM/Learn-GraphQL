import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from './AuthForm';
import { getCurrentUser } from './Header';

const loginMutation = gql`
    mutation Login($email: String, $password: String){
        login(email: $email, password: $password){
            id
            email
        }
    }
`;

const LoginForm: React.FC = (props) => {
  type loginData = { id: string, email: string };
  type loginParams = { email: string, password: string };
  const [login, result] = useMutation<loginData, loginParams>(loginMutation);
  const history = useHistory();

  const onSubmit = ({ email, password }) => {
    login({
      variables: {
        email: email,
        password: password,
      },
      refetchQueries: [{ query: getCurrentUser }]
    }).then(_ => history.push('/'))
      .catch((e) => {
        console.log('ERROR IN LOGIN: ', e);
      })
  }

  return (
    <div>
      <h3>Login</h3>
      <AuthForm onSubmit={ onSubmit }/>
    </div>
  );
}

export default LoginForm;