import React from "react";
import { useContext } from "react";
import Card from "../Card/Card";
import { colorsContext } from "../contexts/colorsContext";
import styles from "./main.module.css";

const Main = () => {
  const { colors } = useContext(colorsContext);

  return (
    <div className={styles.container} style={{ backgroundColor: colors }}>
      <Card />
    </div>
  );
};

export default Main;
