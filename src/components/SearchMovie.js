import React,{useState} from "react";
import "./SearchMovie.css";
import { useDispatch, useSelector } from "react-redux";
import {searchHandler} from "../Redux/moviesActions";
import ReactStars from "react-rating-stars-component";

import MovieRate from "./MovieRate"
const SearchMovie = ({ setNameSearch, ratingSearch, setRatingSearch }) => {
  const [rating,setRating]=useState("")
  console.log(rating,"bonjour")

  const dispatch=useDispatch()
  const ratingg=useSelector((state)=>state.rating)
  const searchtextt=useSelector((state)=>state.SearchText)


 


 const ratingChanged = (newRating) => {

  dispatch(searchHandler({rating:newRating,SearchText:searchtextt}))
  console.log(rating,"zz")

};




  
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Type movie name to search"
         onChange={(e)=>dispatch(searchHandler({SearchText:e.target.value,rating:ratingg}))}
        />
     <div className="rating-search">
          {/*<MovieRate setRating={setRating}/>*/}
          
          <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
  </div>
      </div>
    </div>
  );
};

export default SearchMovie;