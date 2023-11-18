import {Route , Routes  } from "react-router-dom"
import Home from "./home";
import Register from "./components/register";
import { Head } from "./Home/header";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/'  element={<Home/>}></Route>
    </Routes>
    
  </div>
  );
}

export default App;
