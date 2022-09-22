import React from "react";
import ReactDOM from "react-dom";
import src1 from "./assets/TB1qSevu.z1gK0jSZLeXXb9kVXa-520-280.jpg_q90_.webp";
import src2 from "./assets/TB11cFuuxv1gK0jSZFFSuv0sXXa.jpg";
import src3 from "./assets/TB12cCPo7Y2gK0jSZFgSuw5OFXa.jpg";

import "./index.css";

const arr = [src1, src2, src3];
let i = 0;
const app = document.getElementById("root");
function render() {
  return <img src={arr[i]}></img>;
}
ReactDOM.render(render(), app);
function start() {
  setInterval(() => {
    i = (i + 1) % arr.length;
    console.log(i);
    ReactDOM.render(render(), app);
  }, 1000);
}

start();
