import React, { useState, useContext } from "react";
import Reviewpost from "./Reviewpost";
import toast from "react-hot-toast";
import { Context, server } from "../../main";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Addreview() {
  const [review, setreview] = useState('');
  const { IsAuthenticated,setrefresh } = useContext(Context);

  const handleonadd = async () => {
    if (!IsAuthenticated) {
      // If user is not authenticated, navigate to the login page
      toast.error("login first")
      return (<Navigate to={"/login"} />);
    }

    try {
      const { data } = await axios.post(`${server}/review/newreview`, {
        review,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setrefresh((prev)=>!prev);
      toast.success(data.message);
      setreview('');
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <>
      <center>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add Your Review here"
            aria-label="Review "
            aria-describedby="button-addon2"
            name="review"
            value={review}
            onChange={(e) => setreview(e.target.value)}
            required
          />
          <button
            className="btn btn-outline-tertiary btn-danger"
            type="submit"
            id="button-addon2"
            onClick={handleonadd}
          >
            Add
          </button>
        </div>
      </center>
      
    </>
  );
}

export default Addreview;
