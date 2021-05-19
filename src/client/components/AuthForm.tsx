import * as React from 'react';
import { useState } from 'react';


const AuthForm: React.FC = (props) => {
  let [email, setEmail] = useState<string>('');
  let [password, setPassword] = useState<string>('');

  return (
    <div className="row">
      <form action="#" className="col s6">
        <div className="input-field">
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={ email }
            onChange={ e => setEmail(e.target.value) }
          />
        </div>
        <div className="input-field">
          <label htmlFor="">Password</label>
          <input
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