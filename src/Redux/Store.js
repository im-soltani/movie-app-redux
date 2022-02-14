import{createStore} from "redux"
import { MovieReducer } from "./movieReducer"

const store=createStore(MovieReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

