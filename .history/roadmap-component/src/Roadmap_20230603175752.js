// src/App.js
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@radix-ui/react-accordion";
import "@radix-ui/react-accordion/dist/index.css";

function App({ data, style }) {
  return (
    <div style={style}>
      <Accordion type="single">
        {data.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionButton>{item.title}</AccordionButton>
            <AccordionPanel>{item.description}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default App;
