import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Movies } from "./Movies";

function App() {
  return (
    // <Routes>
    //   <Route path='/' element={<Home />}/>
    //   <Route path='movies/:id' element={<Movies />}/>
    // </Routes>
      <Home/>
    );
}

export default App;
