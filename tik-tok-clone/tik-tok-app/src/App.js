import React from "react";
import "./App.css";
import VideoFooter from "./Footer/VideoFooter";
import Video from "./Header/Video";
import VideoSideBar from "./SideBar/VideoSideBar";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          channel="raunak.kumar.4"
          description="working"
          song="game of thrones"
          likes={111}
          messages={222}
          shares={333}
        />
      </div>
    </div>
  );
}

export default App;
