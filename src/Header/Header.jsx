import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="bg-slate-900/50 fixed w-full">
        <div className="container py-6">
          <p className="text-white text-center font-medium">
            TRY GLASSES APP ONLINE
          </p>
        </div>
      </header>
    );
  }
}
