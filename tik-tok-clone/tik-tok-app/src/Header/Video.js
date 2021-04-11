import React, { useRef, useState } from "react";
import VideoFooter from "../Footer/VideoFooter";
import VideoSideBar from "../SideBar/VideoSideBar";
import "./Video.css";

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };
  return (
    <div className="video">
      <video
        onClick={onVideoPress}
        ref={videoRef}
        className="video__player"
        loop
        src={url}
      ></video>

      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSideBar likes={likes} messages={messages} shares={shares} />
    </div>
  );
};

export default Video;
