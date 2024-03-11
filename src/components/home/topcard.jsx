import { IoMdAdd } from "react-icons/io";
function Topcard({topdata}){
    return(<>
    
    <div class="card cardhome" style={{width: "23rem"}}>
      <center>
    <div className="imgbox">
  <img src={topdata.image}  alt="..."/>
  </div>
  </center>
  <div className="cbody">
  <div class="card-body card-bodyhome">
    <center>
    <h4 class="card-title"><b>{topdata.name}</b></h4>
    <p class="card-text">{topdata.desc}</p>
    <a href="#" class="btn btn-warning add"><IoMdAdd /></a>
    </center>
  </div>
  </div>
</div>
    </>);

}
export default Topcard;