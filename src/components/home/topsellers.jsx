import Topcard from "./topcard";
import top5 from "/src/store/top5.jpg"
import top3 from "/src/store/top3.jpg"

function Top(){
    const topobj  = [{
        image:top5,
        name:"Veg Burger",
        price:50,
},
{
    image:top3,
    name:"Maharaja Burger",
    price:190,
},
{
    image:top5,
    name:"Classic Cheese Burger",
    price:160,

},]
    return(<div className="topbody">
        <center className="centertop">
        <h4>OUR TOPS</h4>
        <h1> <b>Choose & Enjoy</b></h1>
        </center>
        <div className="toplist">
        {topobj&&topobj.map((topdata,index)=>(
         
            <Topcard topdata ={topdata} key={index}></Topcard>
            
        ))}
        </div>
    
    </div>
);
}
export default Top;