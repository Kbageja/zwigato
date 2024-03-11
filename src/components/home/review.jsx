import Reviewpost from "./Reviewpost";
import Addreview from "./addreview";

function Review(){
return(
<>
<center>
 <h1>Reviews</h1>
 <Addreview></Addreview>
 <div className="review">
        <Reviewpost />
      </div>

 </center>


</>
);

}
export default Review;
