import Topcard from "./topcard";
function Top(){
    const topobj  = [{
        image:"src/store/top5.jpg",
        name:"Veg Burger",
        price:50,
},
{
    image:"src/store/top3.jpg",
    name:"Maharaja Burger",
    price:190,
},
{
    image:"src/store/top5.jpg",
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