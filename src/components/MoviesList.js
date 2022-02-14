import React,{useState} from 'react';
import {moviesData} from "./MoviesData"
import MovieCard from "./MovieCard"
import { useSelector } from 'react-redux';
import '../App.css'

function MoviesList() {
   // const [movies,setMovies]=useState(moviesData)

const listFilm=useSelector((state)=>state.moviesList)
console.log(listFilm,"list film")
const nameSearch=useSelector((state)=>state.SearchText)
const ratingSearch=useSelector((state)=>state.rating)
console.log(ratingSearch,"this is the ratingsearch")


    
  return <div style={{
   display: "flex",
   flexDirection: "row",
   justifyContent: "space-evenly",
   flexWrap: "wrap"
 }}>
     {listFilm
       .filter(
        el =>
         
        el.rating >= ratingSearch  &&
       
         el.name.toLowerCase().includes(nameSearch.toLowerCase().trim())

         
      )

   

     .map((el,i)=>(
         <MovieCard movie={el} key={i}/>
     ))}
  </div>;
}

export default MoviesList;


