function Offer(){
  
  const copyclipboard=(value)=>{
    navigator.clipboard.writeText(value)
    .then(() => {
      console.log('Value copied to clipboard:', value);
      // You can show a success message here if needed
    })
    .catch(error => {
      console.error('Failed to copy:', error);
      // Handle error, such as showing an error message to the user
    });

  }
    return(
    <>
    
  <div className="offer">
    <div className="leftoffer">
    <p>50% Off Upto</p>
    <p>80</p>
    <div className="leftrightoffer">
    <p>Use code :  </p>
    <button className="coupon" onClick={()=>{copyclipboard("xbbhdd")}}><center>xbbhdd</center></button>
    </div>
    </div>
   
  </div>



    </>
    );

}
export default Offer;