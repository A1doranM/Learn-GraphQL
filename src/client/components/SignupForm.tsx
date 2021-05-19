import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from './AuthForm';

const signupMutation = gql`
    mutation Signup($email: String, $password: String){
        signup(email: $email, password: $password){
            id
            email
        }
    }
`;

const SignupForm: React.FC = (props) => {
  type signUpData = { id: string, email: string };
  type signupParams = { email: string, password: string };
  const [signup, result] = useMutation<signUpData, signupParams>(signupMutation);
  const history = useHistory();

  const onSubmit = ({ email, password }) => {
    signup({
      variables: {
        email: email,
        password: password,
      },
    }).then(_ => history.push('/'))
      .catch((e) => {
        console.log('ERROR IN LOGIN: ', e);
      })
  }

  return (
    <div>
      <h3>SignUp</h3>
      <AuthForm onSubmit={ onSubmit }/>
    </div>
  );
}

export default SignupForm;