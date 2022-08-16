import React, { Component } from "react";
import { dataGlasses } from "../glassesData/dataGlasses";
import GlassList from "./GlassList";
import Model from "./Model";
import styles from "./tryOnGlasses.module.css";

export default class TryOnGlasses extends Component {
  state = {
    glassList: dataGlasses,
    glassToShow: null,
  };
  handleGlassClick = (glass) => {
    this.setState({
      glassToShow: glass,
    });
  };
  render() {
    return (
      <section className={`${styles.tryGlass} pt-24 pb-4`}>
        <div className="container">
          <Model
            glassList={this.state.glassList}
            glassToShow={this.state.glassToShow}
          />
          <GlassList
            glassList={this.state.glassList}
            handleGlassClick={this.handleGlassClick}
          />
        </div>
      </section>
    );
  }
}
