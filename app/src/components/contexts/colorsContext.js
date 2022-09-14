import { createContext, useState } from "react";

const colorsContext = createContext();

const ColorsProvider = ({ children }) => {
  const [colors, setColors] = useState([]);

  const generateColor = (obj) => {
    const newColor = `rgb(${obj.R}, ${obj.G}, ${obj.B})`;

    setColors(newColor);
  };

  return (
    <colorsContext.Provider value={{ colors, generateColor }}>
      {children}
    </colorsContext.Provider>
  );
};

export default ColorsProvider;

export { colorsContext };
