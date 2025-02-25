import React from "react";
import data from "./data";
import React, { useState } from "react";
import "./styles.css";
const Accordion = () => {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  return (
    <div className="wrapper">
      <button>Enable Multi Section</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItems) => (
            <div className="item">
              <div
                onClick={() => handleSingleSelection(dataItems.id)}
                className="title"
              >
                <h3>{dataItems.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItems.id ? (
                <div className="content">{dataItems.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
