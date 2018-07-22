import React, { PureComponent } from "react";

import "./Tab.css";

class Tab extends PureComponent {
  render() {
    const p = this.props;
    const tabType = p.single ? "radio" : "checkbox";
    return (
      <div className="tab">
        <input
          id={p.id}
          type={tabType}
          name="tabs"
          checked={p.open}
          onChange={() => p.clicked(p.id)}
        />
        <label htmlFor={p.id}>{p.title}</label>
        <div className="tab-content">{p.children}</div>
      </div>
    );
  }
}

export default Tab;
