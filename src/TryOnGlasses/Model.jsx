import React, { Component } from "react";
import styles from "./tryOnGlasses.module.css";

export default class Model extends Component {
  render() {
    let glassToShow = this.props.glassToShow;
    let tryOnGlassImage;
    let glassDetail;
    if (this.props.glassToShow !== null) {
      tryOnGlassImage = (
        <img src={glassToShow.url} alt="" className={styles.tryOnImage} />
      );
      glassDetail = (
        <div className="absolute bottom-0 px-4 py-2 bg-orange-400/30 text-justify">
          <p className="font-medium text-lg">{glassToShow.name}</p>
          <p>{glassToShow.desc}</p>
        </div>
      );
    }
    return (
      <div className="model w-3/5 mx-auto flex justify-center space-x-64">
        <div className="relative w-4/12">
          <img src="glassesImage/model.jpg" alt="modelAfter" />
          {tryOnGlassImage}
          {glassDetail}
        </div>
        <div className="model__before w-4/12">
          <img src="glassesImage/model.jpg" alt="modelBefore" />
        </div>
      </div>
    );
  }
}
