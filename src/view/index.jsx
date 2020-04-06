import React, { useState } from "react";

import Header from "./header";
import Main from "./main";
import Footer from "./footer";

import Modal from "./components/modal";

const App = () => {
  const [theme, setTheme] = useState("");
  const [modal, setModal] = useState("");
  const handleTheme = () => {
    if (theme !== "dark") return setTheme("dark");
    return setTheme("");
  };
  const handleModal = () => {
    return setModal(!modal);
  };
  return (
    <React.StrictMode>
      {modal && <Modal event={handleModal}/>}
      <Header theme={theme} modal={modal} />
      <Main theme={handleTheme} modal={handleModal} />
      <Footer />
    </React.StrictMode>
  );
};

export default App;
