import { useContext } from "react";
import { IoMdAdd } from "react-icons/io";
import { Context } from "../../main";
function Topcard({topdata}){
  const {handleaddtocart}=useContext(Context);
    return(<>
    
    <div className="card cardhome" style={{width: "23rem"}}>
      <center>
    <div className="imgbox">
  <img src={topdata.image}  alt="..."/>
  </div>
  </center>
  <div className="cbody">
  <div className="card-body card-bodyhome">
    <center>
    <h4 className="card-title"><b>{topdata.name}</b></h4>
    <p className="card-text">₹{topdata.price}/-</p>
    <button className="btn btn-warning add" onClick={()=>{handleaddtocart(topdata.name,topdata.price,)}}><IoMdAdd /></button>
    </center>
  </div>
  </div>
</div>
    </>);

}
export default Topcard;