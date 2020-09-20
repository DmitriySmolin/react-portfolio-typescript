import React from "react";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MyProjects from "./components/MyProjects/MyProjects";
import RemoteWork from "./components/RemoteWork/RemoteWork";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <MyProjects />
      <RemoteWork />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
