import * as React from 'react';
import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

interface IAuthFormProps {
  onSubmit: (loginData: {
    email: string,
    password: string
  }) => void;
}

const AuthForm: React.FC<IAuthFormProps> = (props) => {
  let [email, setEmail] = useState<string>('');
  let [password, setPassword] = useState<string>('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit({ email, password });
  }

  return (
    <div className="row">
      <form action="#" className="col s6" onSubmit={ onSubmit }>
        <div className="input-field">
          <input
            placeholder="Email"
            type="email"
            value={ email }
            onChange={ e => setEmail(e.target.value) }
          />
        </div>
        <div className="input-field">
          <input
            placeholder="Password"
            type="password"
            value={ password }
            onChange={ e => setPassword(e.target.value) }
          />
        </div>
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AuthForm;