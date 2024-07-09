import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="check-out">
      <form action="checkout">
        <div className="Delivery">
          <div><p>Delivery Address</p></div>
          <div>Express Delivery 
            <p>Delivered on or before Wednesday 10th July</p>
          </div>
        </div>
        <div>FREE</div>
        <table>
          <div>Delivery Address</div>
         <div><label htmlFor="email">Email Address</label></div> 
          <div><input type="text" /></div>
        </table>
      </form>
    
    </div>
  )
}

export default Checkout;