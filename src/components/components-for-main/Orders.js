import '../../App.css';
import './Main.css'




function Orders() {
  return (
    <div className="Orders orders">
     <table>
        <tr className="starter">
          <td>Date</td>
          <td>Name</td>
          <td>Ship To</td>
          <td>Payment Method</td>
          <td>Sale Amount</td>
        </tr>
        <tr className="other">
          <td>16 Mar, 2021</td>
          <td>Elvis Presley</td>
          <td>Tupelo, MS</td>
          <td>VISA ⠀•••• 3719</td>
          <td>312.44</td>
        </tr>
        <tr className="other">
          <td>16 Mar, 2021</td>
          <td>Tom Scholz</td>
          <td>Boston, MA</td>
          <td>MC ⠀•••• 1253</td>
          <td>100.81</td>
        </tr>
        <tr className="other">
          <td>16 Mar, 2021</td>
          <td>Paul McCartney</td>
          <td>London, UK</td>
          <td>VISA ⠀•••• 2574</td>
          <td>866.99</td>
        </tr>
        <tr className="other">
          <td>16 Mar, 2021</td>
          <td>Michael Jackson</td>
          <td>Gary, IN</td>
          <td>AMEX ⠀•••• 2000</td>
          <td>654.39</td>
        </tr>
        <tr className="other">
          <td>15 Mar, 2021</td>
          <td>Bruce Springsteen</td>
          <td>Long Branch, NJ</td>
          <td>VISA ⠀•••• 5919</td>
          <td>212.79</td>
        </tr>
      </table>
    </div>
  );
}


export default Orders;