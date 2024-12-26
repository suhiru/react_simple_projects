import data from './data';
import React, { useState } from 'react';
import './styles.css';

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  //handle single selection
  const handleSingleSelection = (currentid) => {
    console.log('currentid', currentid);
    if (selected === currentid) {
      setSelected(null);
    } else {
      setSelected(currentid);
    }
  };
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="item">
              <div
                className="title"
                onClick={() => handleSingleSelection(item.id)}
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {selected === item.id ? (
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
