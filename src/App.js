import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard";

import LikeCounter from "./components/LikeCounter";
import SayHello from "./components/SayHello";
// import AwsomeAnimals from "./components/AwsomeAnimals";
// import InterpolateDataTypes from "./components/InterpolateDataTypes";
// import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Lets Do This MotherF*cker!" />
        <Scoreboard />
        {/* <LikeCounter /> */}
      </main>
      {/* <header className="App-header">  */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <ArticleList></ArticleList> */}
      {/* <InterpolateDataTypes /> */}
      {/* <AwsomeAnimals /> */}
      {/* <ArticleList /> */}

      {/* </header> */}
    </div>
  );
}
export default App;
    // ...
// ... Note: <Title content="Some Simple Tricks" /> the "content" here is a prop...see Title.js
