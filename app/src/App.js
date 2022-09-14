import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Rgb from "./components/Rgb/Rgb";
import Color from "./components/Color/Color";
import ColorsProvider from "./components/contexts/colorsContext";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <ColorsProvider>
              <Main />
            </ColorsProvider>
          }
        />
        <Route
          path='rgba'
          element={
            <ColorsProvider>
              <Rgb />
            </ColorsProvider>
          }
        />
        <Route
          path='color'
          element={
            <ColorsProvider>
              <Color />
            </ColorsProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
