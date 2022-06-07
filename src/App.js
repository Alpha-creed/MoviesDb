import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Movies } from "./Movies";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='movies/' element={<Movies/>}/>
    </Routes>
  );
}

export default App;
