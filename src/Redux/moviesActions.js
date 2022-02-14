import { DISPLAY,ADD_MOVIE,DELETE_MOVIE ,SEARCH_MOVIE} from "./actionTypes";

export const displayHandler =(movies)=>{
    return{
        type:DISPLAY,
        payload:movies
    }
}
export const addHandler=(newMovie)=>{
    return{
        type:ADD_MOVIE,
        payload:newMovie
    }
}
export const deleteHandler=(movie)=>{
    return{
        type:DELETE_MOVIE ,
        payload:movie
    }
}
export const searchHandler=(movie)=>{
    return{
type:SEARCH_MOVIE,
payload:movie
    }
}
