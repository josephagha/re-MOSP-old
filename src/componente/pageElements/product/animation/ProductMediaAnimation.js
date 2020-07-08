// eslint-disable-line no-unused-vars

import React from "react";
import lottie from "lottie-web";

import animationBackground from "../../../../media/animation/animationBackground/data.json";

import flogIN from "../../../../media/animation/flog/in/data.json";
import flogOut from "../../../../media/animation/flog/out/data.json";

import windowLeftIn from "../../../../media/animation/windows/left_in/data.json";
import windowLeftOut from "../../../../media/animation/windows/left_out/data.json";
import windowCenterIn from "../../../../media/animation/windows/center_in/data.json";
import windowCenterOut from "../../../../media/animation/windows/center_out/data.json";
import windowRightIn from "../../../../media/animation/windows/right_in/data.json";
import windowRightOut from "../../../../media/animation/windows/right_out/data.json";

import doorIn from "../../../../media/animation/door/in/data.json";
import doorOut from "../../../../media/animation/door/out/data.json";

let animationBackgroundObject = null;

let flogInObject = null;
let flogOutObject = null;

let windowLeftInObject = null;
let windowLeftOutObject = null;

let windowCenterInObject = null;
let windowCenterOutObject = null;

let windowRightInObject = null;
let windowRightOutObject = null;

let doorInObject = null;
let doorOutObject = null;

class ProductMediaAnimation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    animationBackgroundObject = lottie.loadAnimation({
      container: this.animationBackgroundSelector,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationBackground
    });

    windowLeftInObject = lottie.loadAnimation({
      container: this.windowLeftInSelector,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: windowLeftIn
    });

    windowLeftOutObject = lottie.loadAnimation({
      container: this.windowLeftOutSelector,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: windowLeftOut
    });

    windowRightInObject = lottie.loadAnimation({
      container: this.windowRightInSelector,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: windowRightIn
    });

    windowRightOutObject = lottie.loadAnimation({
      container: this.windowRightOutSelector,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: windowRightOut
    });

    windowCenterInObject = lottie.loadAnimation({
      container: this.windowCenterInSelector,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: windowCenterIn
    });

    windowCenterOutObject = lottie.loadAnimation({
      container: this.windowCenterOutSelector,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: windowCenterOut
    });

    flogInObject = lottie.loadAnimation({
      container: this.flogInSelector,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: flogIN
    });

    flogOutObject = lottie.loadAnimation({
      container: this.flogOutSelector,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: flogOut
    });

    doorInObject = lottie.loadAnimation({
      container: this.doorInSelector,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: doorIn
    });

    doorOutObject = lottie.loadAnimation({
      container: this.doorOutSelector,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: doorOut
    });
  }

  componentDidUpdate() {
    //10€
    if (this.props.donationValue === "1") {
      this.isWindowLeftNotHere();
      this.isWindowCenter();
      this.isWindowRight();
      this.isFlog();
      this.isDoor();
    }
    //20€
    if (this.props.donationValue === "2") {
      this.isWindowLeftNotHere();
      this.isWindowCenterNotHere();

      this.isWindowRight();
      this.isFlog();
      this.isDoor();
    }
    //50€
    if (this.props.donationValue === "3") {
      this.isWindowLeftNotHere();
      this.isWindowCenterNotHere();
      this.isWindowRightNotHere();

      this.isFlog();
      this.isDoor();
    }
    //100€
    if (this.props.donationValue === "4") {
      this.isWindowLeftNotHere();
      this.isWindowCenterNotHere();
      this.isWindowRightNotHere();

      this.isFlogNotHere();
      this.isDoorNotHere();
    }
  }

  isWindowCenter = () => {
    if (windowCenterInObject.currentFrame !== 0) {
      this.elementOut(windowCenterInObject, windowCenterOutObject);
    }
  };
  isWindowRight = () => {
    if (windowRightInObject.currentFrame !== 0) {
      this.elementOut(windowRightInObject, windowRightOutObject);
    }
  };
  isFlog = () => {
    if (flogInObject.currentFrame !== 0) {
      this.elementOut(flogInObject, flogOutObject);
    }
  };
  isDoor = () => {
    if (doorInObject.currentFrame !== 0) {
      this.elementOut(doorInObject, doorOutObject);
    }
  };

  isWindowLeftNotHere = () => {
    if (windowLeftInObject.currentFrame === 0) {
      this.elementIn(windowLeftInObject);
    }
  };
  isWindowCenterNotHere = () => {
    if (windowCenterInObject.currentFrame === 0) {
      this.elementIn(windowCenterInObject);
    }
  };
  isWindowRightNotHere = () => {
    if (windowRightInObject.currentFrame === 0) {
      this.elementIn(windowRightInObject);
    }
  };
  isFlogNotHere = () => {
    if (flogInObject.currentFrame === 0) {
      this.elementIn(flogInObject);
    }
  };
  isDoorNotHere = () => {
    if (doorInObject.currentFrame === 0) {
      this.elementIn(doorInObject);
    }
  };

  elementIn = elementIn => {
    elementIn.goToAndPlay(true, true);
  };
  elementOut = (elementIN, elementOut) => {
    elementIN.goToAndStop(0, true);
    elementOut.goToAndPlay(true, true);
  };

  handleRange = event => {
    this.setState({ donationValue: event.target.value });
  };

  render() {
    return (
      <div className="animationMedia">
        <div className="donationAnimation">
          <div
            className="animationBackground"
            ref={ref => (this.animationBackgroundSelector = ref)}
          />
          <div className="flog1" ref={ref => (this.flogInSelector = ref)} />
          <div className="flog2" ref={ref => (this.flogOutSelector = ref)} />
          <div
            className="window1"
            ref={ref => (this.windowLeftInSelector = ref)}
          />
          <div
            className="window2"
            ref={ref => (this.windowLeftOutSelector = ref)}
          />
          <div
            className="window3"
            ref={ref => (this.windowCenterInSelector = ref)}
          />
          <div
            className="window4"
            ref={ref => (this.windowCenterOutSelector = ref)}
          />
          <div
            className="window5"
            ref={ref => (this.windowRightInSelector = ref)}
          />
          <div
            className="window6"
            ref={ref => (this.windowRightOutSelector = ref)}
          />
          <div className="door1" ref={ref => (this.doorInSelector = ref)} />
          <div className="door2" ref={ref => (this.doorOutSelector = ref)} />
        </div>
      </div>
    );
  }
}

export default ProductMediaAnimation;
