import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Rgba from "./components/Rgba/Rgba";
import Color from "./components/Color/Color";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='rgba' element={<Rgba />} />
        <Route path='color' element={<Color />} />
      </Routes>
    </div>
  );
}

export default App;
