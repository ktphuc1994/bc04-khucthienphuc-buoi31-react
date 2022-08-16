import React, { Component } from "react";

export default class GlassList extends Component {
  render() {
    return (
      <div className="glass__catalogue w-4/6 mx-auto mt-8 p-3 bg-white">
        <div className="glass__content flex flex-wrap">
          {this.props.glassList.map((glass, index) => {
            return (
              <div
                key={index.toString() + glass.id}
                className="glass w-1/6 p-3"
              >
                <img
                  src={glass.url}
                  alt={glass.name}
                  className="glass__image p-2 border cursor-pointer"
                  onClick={() => {
                    this.props.handleGlassClick(glass);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
