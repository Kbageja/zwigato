import Topcard from "./topcard";
function Top(){
    const topobj  = [{
        image:"src/store/top5.jpg",
        name:"Veg Burger",
        desc:"cheese,vegpatty,lettuce,tomato",
},
{
    image:"src/store/top3.jpg",
    name:"Maharaja Burger",
    desc:"Jalapenos,nachos,cheese,lettuce",
},
{
    image:"src/store/top5.jpg",
    name:"Classic Cheese Burger",
    desc:"Jalapenos,nachos,cheese sauce",

},]
    return(<div className="topbody">
        <center className="centertop">
        <h4>OUR TOPS</h4>
        <h1> <b>Choose & Enjoy</b></h1>
        </center>
        <div className="toplist">
        {topobj&&topobj.map((topdata)=>(
         
            <Topcard topdata ={topdata}></Topcard>
            
        ))}
        </div>
    
    </div>
);
}
export default Top;