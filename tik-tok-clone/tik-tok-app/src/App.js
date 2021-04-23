import React, { useEffect, useState } from "react";
import "./App.css";
import VideoFooter from "./Footer/VideoFooter";
import Video from "./Header/Video";
import VideoSideBar from "./SideBar/VideoSideBar";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPost() {
      const response = await axios.get("/api/videos");
      setVideos(response.data);

      return response;
    }
    fetchPost();
  }, []);
  console.log(videos);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
