import{Route,Routes} from "react-router-dom"
import MoviesList from "./components/MoviesList"
import './App.css';
import AddMovie from "./components/AddMovie";
import SearchMovie from "./components/SearchMovie";

function App() {
  return (
    <div className="wrapper">
     
      <SearchMovie />
      <Routes>
      <Route path="/" element={<MoviesList />}/>
      </Routes>
      <AddMovie />
    </div>
  );
}

export default App;
