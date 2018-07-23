import React, { Component } from "react";

class Accordion extends Component {
  constructor(props) {
    super(props);
    let openList = {};
    let open = null;
    for (let child in props.children) {
      const tab = props.children[child];
      openList[tab.props.id] = tab.props.open ? true : false;
      if (props.single && !open) open = tab.props.open ? tab.props.id : null;
    }
    this.state = { openList, open };
  }

  clicked = id => {
    this.setState(prevState => {
      if (this.props.single) {
        //For single mode, we use radio button
        //then we should false the value of previous selected(opened) radio button 
        //and true the current selected(opened) radio button 
        
        // let openList = {};
        // for (let tabOpen in prevState.openList) {
        //   openList[tabOpen] = tabOpen === id;
        // }
        // return { openList };

        return {
          openList: {
            ...prevState.openList,
            [prevState.open]: false,
            [id]: true
          },
          open: id
        };
      } else {
        return {
          openList: { ...prevState.openList, [id]: !prevState.openList[id] }
        };
      }
    });
  };

  render() {
    const { children } = this.props;
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {
        single: this.props.single ? true : false,
        open: this.state.openList[child.props.id],
        clicked: this.clicked
      })
    );

    return <div>{childrenWithProps}</div>;
  }
}

export default Accordion;
