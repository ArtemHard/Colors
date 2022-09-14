import React from "react";
import { useContext } from "react";
import { colorsContext } from "../contexts/colorsContext";
import styles from "./color.module.css";

const Color = () => {
  const { colors } = useContext(colorsContext);

  return (
    <div className={styles.container} style={{ backgroundColor: colors }}></div>
  );
};

export default Color;
