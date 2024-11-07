import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import {  Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";

// const router = createBrowserRouter([
//  //FILL HERE
// ]);

function App() {
  return (
    <div>
      <Routes>
      <PrivateRoute component= {<Floor/>} >
            </PrivateRoute>
            <Route path="/forbidden" element ={<Forbidden/>}/>
              <Route path="/" element ={<Layout/>}/>
          
      </Routes>
   
    </div>
  );
}

export default App;
