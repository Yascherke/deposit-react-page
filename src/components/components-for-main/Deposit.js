import React, { useState } from 'react';

import '../../App.css';
import './Main.css'



function Deposit() {
  let r = Math.floor(Math.random() * 501);
  const [count, setCount] = useState(3024);

  return (
    <div className="Deposit deposit">
      <h3>Recent Deposits</h3>
      <p className="cash">${count}</p>
      <p className="static-date">on 15 March, 2019</p>

      <button onClick={() => setCount(count + r)}>NEED MORE MONEY</button>
    </div>
  );
}


export default Deposit;