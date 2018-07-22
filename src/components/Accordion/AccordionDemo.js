import React from "react";
import Accordion from "./Accordion";
import Tab from "./Tab";
const AccordionDemo = () => {
  return (
    <div>
      <Accordion single>
        <Tab id="tab1" title="Tab1" >
          <p>Content of tab one</p>
        </Tab>
        <Tab id="tab2" title="Tab2" open>
          <p>Content of tab two</p>
        </Tab>
        <Tab id="tab3" title="Tab3" >
          <p>Content of tab three</p>
        </Tab>
      </Accordion>
    </div>
  );
};

export default AccordionDemo;
