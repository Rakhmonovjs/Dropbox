import Homepage from "./Homepage/Homepage";
import { Route, Routes} from "react-router-dom"
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

const App =() => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
