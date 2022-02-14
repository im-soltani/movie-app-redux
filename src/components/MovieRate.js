import React from "react";
import {useDispatch,useSelector} from "react-redux"
import {searchHandler} from "../Redux/moviesActions"


const MovieRate = ({rate}) => {
  const dispatch=useDispatch()
  const stars = (x) => {
    let starsArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starsArray.push(

        /*<span key={i} onClick={() => dispatch(searchHandler({rating:i}))} class="match">*/
        <span key={i} >

            ★
          </span>
        );
      } else {
        starsArray.push(
          <span key={i}>
            ☆
          </span>
        );
      }
    }
    return starsArray;
  };
  return <div>{stars(rate)}</div>;
};

MovieRate.defaultProps = {
  rating: 1
};

export default MovieRate;
