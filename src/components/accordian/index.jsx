import data from './data';
import React, { useState } from 'react';
import './styles.css';

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleItems, setMultipleItems] = useState([]);

  //handle single selection
  const handleSingleSelection = (currentid) => {
    console.log('currentid', currentid);
    if (selected === currentid) {
      setSelected(null);
    } else {
      setSelected(currentid);
    }
  };

  //handle multi selection
  const handleMultiSelection = (currentid) => {
    const cpMuntipleItems = [...multipleItems];
    const indexOfItem = cpMuntipleItems.indexOf(currentid);
    if (indexOfItem > -1) {
      cpMuntipleItems.splice(indexOfItem, 1);
    } else {
      cpMuntipleItems.push(currentid);
    }

    setMultipleItems(cpMuntipleItems);
  };
  console.log('multipleItems', multipleItems);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="item">
              <div
                className="title"
                onClick={() =>
                  enableMultiSelection
                    ? handleMultiSelection(item.id)
                    : handleSingleSelection(item.id)
                }
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {selected === item.id || multipleItems.indexOf(item.id) !== -1 ? (
                <div className="content">{item.answer} </div>
              ) : null}
            </div>
          ))
        ) : (
          <div> No data was provided </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
