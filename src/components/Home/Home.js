import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <button className="home__generate">Get a random task</button>
        <div className="home__currentTask">current task</div>
        <button className="home__complete">Complete Task</button>
      </div>
    </div>
  );
}

export default Home;
