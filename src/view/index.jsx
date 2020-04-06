import React, { useState } from "react";

import Header from "./header";
import Main from "./main";
import Footer from "./footer";

const App = () => {
  const [theme,setTheme] = useState('');
  const handleTheme = () =>{
    if(theme!=='dark') return setTheme('dark')
    return setTheme('')
  }
  return (
    <React.StrictMode>
      <Header theme={theme}/>
      <Main event={handleTheme}/>
      <Footer />
    </React.StrictMode>
  );
};

export default App;
