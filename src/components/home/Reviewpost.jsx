import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Context, server } from "../../main";
import { Navigate } from "react-router-dom";

function Reviewpost() {
  const [reviews, setReviews] = useState([]);
 const {refresh,setrefresh} = useContext(Context);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await axios.get(`${server}/review/allreview`, { withCredentials: true });
        setReviews(data.reviews);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
    };

    fetchReviews();
  }, [refresh]);
  

  return (
    <div className="reviewposts">
      {reviews.map((review) => (
        <div className="reviewpost" key={review._id}>
          <h5>{review.user}</h5>
         
          <p>{review.review}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviewpost;
