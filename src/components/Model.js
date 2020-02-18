import "@google/model-viewer";
import React, { Component } from "react";
import Marsh from "../resources/marsh_tryout.glb";
import Loading from "../resources/eclipse_loading.gif";

class Model extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  cameraUp = () => {
    console.log("cam-up");
    const model = document.querySelector("#model");
    model.removeAttribute("camera-orbit");
    model.setAttribute("camera-orbit", "0deg 140deg 1m");
  };

  cameraDown = () => {
    console.log("cam-down");
    const model = document.querySelector("#model");
    model.removeAttribute("camera-orbit");
    model.setAttribute("camera-orbit", "0deg 60deg 1m");
  };

  tryout = () => {
    console.log("test");
    setInterval(this.cameraDown, 2000);
  };

  componentDidMount = () => {
    setInterval(this.cameraUp, 2000);
    setTimeout(this.tryout, 1000);
  };

  render() {
    return (
      <div>
        <p>START</p>
        <model-viewer
          id="model"
          shadow-intensity="0"
          shadow-softness="0"
          camera-orbit="0deg 90deg 1m"
          skybox_image
          poster={Loading}
          src={Marsh}
          //   camera-controls
          //   auto-rotate
        ></model-viewer>
        <p>END</p>
      </div>
    );
  }
}

export default Model;
