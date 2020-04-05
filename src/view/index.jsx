<<<<<<< HEAD:src/view/index.jsx
import React from 'react';

const App = () => {
  return(
    <h1>Boilerplate</h1>
  )
}

=======
import React from "react";

import Header from "./components/header";

const App = () => {
  return (
    <React.StrictMode>
      <Header>
        <h1>Boilerplate</h1>
      </Header>
    </React.StrictMode>
  );
};
>>>>>>> develop:src/view/App.js

export default App;
