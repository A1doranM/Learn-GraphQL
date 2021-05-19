import * as React from 'react';
import AuthForm from './AuthForm';


const LoginForm: React.FC = (props) => {
  return (
    <div>
      <h3>Login</h3>
      <AuthForm/>
    </div>
  );
}

export default LoginForm;