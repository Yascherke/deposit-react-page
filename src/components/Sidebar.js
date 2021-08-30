import '../App.css';

function Sidebar() {
  return (
    <div className="Sidebar sidebar">
      <header>
        <span>&#60;</span>

      </header>
      <hr />
      <div className="s-links">
        
        <a className="link-item" href='/Main' >Dashboard</a>
        <a className="link-item" href='/Orders' >Orders</a>
        <a className="link-item" href='/Customers' >Customers</a>
        <a className="link-item" href='/Reports' >Reports</a>
        <a className="link-item" href='/Integrations' >Integrations</a>

      </div>
      <hr />
      <div className="reports">
        <p><b>Save reports</b></p>

        <a className="link-item" href='#' >Current month</a>
        <a className="link-item" href='#' >Last qarter</a>
        <a className="link-item" href='#' >Year-end sale</a>    
      </div>     

    </div>
  );
}

export default Sidebar;
