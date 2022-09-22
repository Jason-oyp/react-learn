import React from 'react';
import ReactDOM from 'react-dom';
import src1 from './assets/TB1qSevu.z1gK0jSZLeXXb9kVXa-520-280.jpg_q90_.webp';
import src2 from './assets/TB11cFuuxv1gK0jSZFFSuv0sXXa.jpg';
import src3 from './assets/TB12cCPo7Y2gK0jSZFgSuw5OFXa.jpg';

const srcs = [src1, src2, src3];
let index = 0;
let timer = null;
const root = document.getElementById('root');


function render() {
    const div = (<img src={srcs[index]} alt="" />);
    ReactDOM.render(div, root);
}

function start() {
    stop();
    timer = setInterval(() => {
        index = (index + 1) % 3;
        render();
    }, 3000);
}

function stop() {
    clearInterval(timer);
}
start();