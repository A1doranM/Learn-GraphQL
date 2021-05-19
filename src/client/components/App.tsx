import * as React from 'react';
import Header from './Header';

const App: React.FC = (props) => {
  return (
    <div className="container">
      <Header/>
      { props.children }
    </div>
  );
}

export default App;