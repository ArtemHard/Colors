import React, { useContext } from "react";
import { colorsContext } from "../contexts/colorsContext";
import styles from "./rgb.module.css";

const Rgb = () => {
  const { colors } = useContext(colorsContext);
  console.log(colors);

  return (
    <div className={styles.container} style={{ backgroundColor: colors }}>
      <div>
        <p className={styles.text_card}>
          {colors.length ? "Цветовой код: " + colors : "цветовой код не указан"}
        </p>
      </div>
    </div>
  );
};

export default Rgb;
