import React from "react";
import { Delay } from "react-delay-fallback";
import video from "./videos/startVideo.mp4";
import "./index.css"

const Fallback = () => {
  const handleOnRender = () => <div></div>;

  return (
    <Delay
      timeout={2000}
      fallback={
        <span>
          <video className="videoTag" id="video-background" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </span>
      } // <-- this will be rendered while page is loading
      onRender={handleOnRender}
    ></Delay>
  );
};

export default Fallback;
