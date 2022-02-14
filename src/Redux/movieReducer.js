import {DISPLAY,ADD_MOVIE,DELETE_MOVIE, SEARCH_MOVIE} from "./actionTypes"

import {moviesData} from "../components/MoviesData"

const initialState={
moviesList:moviesData,
rating:"",
SearchText:""


};
console.log("testtttttt50",initialState.SearchText)
export const MovieReducer = (state=initialState,action)=>{
switch(action.type){
    case DISPLAY:
        return{
            ...state,
            moviesList:action.payload

        };
   
    case ADD_MOVIE:
        return {
          ...state,
          moviesList: [...state.moviesList, action.payload],
        };
    case SEARCH_MOVIE:
        return{
            ...state,
            rating: action.payload.rating,
            SearchText:action.payload.SearchText
        }
        default:
            return state;
}

}
