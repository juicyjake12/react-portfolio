import React, { useState } from "react";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Footer from "../src/components/Footer";
import "./App.css";
function App() {
  const [currentTab, handleTabChange] = useState("about");
  const renderTab = () => {
    if (currentTab === "About") {
      return <About />;
    }
    if (currentTab === "Contact") {
      return <Contact />;
    }
    if (currentTab === "Portfolio") {
      return <Portfolio />;
    }
    if (currentTab === "Resume") {
      return <Resume />;
    }
    return <About />;
  };

  return (
    <div>
      <Header
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      ></Header>
        <main>{renderTab()}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;