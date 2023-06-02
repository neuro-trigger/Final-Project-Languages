import React, { useEffect, useState } from 'react';
import './Machine.css';

const TuringMachineRender = () => {
  const [arrayData, setArrayData] = useState([4, 9, 2, "a", 5, 0, 0, 1, 2, 3, 4, 6, 8, 9, 10, 12, "", 8, 8, 9, 10]);
  const [position, setPosition] = useState(-108);
  const [moveCount, setMoveCount] = useState(0);

  useEffect(() => {
    renderArray();
  }, []);


  const renderArray = () => {
    return arrayData.map((value, index) => (
      <div key={index} className="tapecell">
        {value}
      </div>
    ));
  };

  const move = (sentido) => {

    setPosition((prevPosition) => prevPosition + (sentido * 54));
  };


  return (
    <>
      <div className='boxtape'>
        <div className='head'></div>
        <div className='tape' style={{ transform: `translate3d(${position}px,0,0)`, transition: ' 1.2s ease-in'}}>
          {renderArray()}
        </div>
        <h4>cabezal</h4>
      </div>
      <button onClick={() => move(1)}>Derecha</button>
      <button onClick={() => move(-1)}>Izquierda</button>
    </>
  );
};

export default TuringMachineRender;