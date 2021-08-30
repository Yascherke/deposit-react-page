import '../App.css';
import Today from './components-for-main/Today';
import Deposit from './components-for-main/Deposit';
import Orders from './components-for-main/Orders';

function Main() {
  return (
    <div className="Main main">

        <Today />
        <Deposit />
        <Orders />

    </div>
  );
}

export default Main;