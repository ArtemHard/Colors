import React from "react";
import { useState } from "react";
import styles from "./card.module.css";
import "./index.css";

const Card = () => {
  const [rColor, setRColor] = useState("000");
  const [gColor, setGColor] = useState("000");
  const [bColor, setBColor] = useState("000");

  const [rColorBorder, setRColorBorder] = useState("");
  const [gColorBorder, setGColorBorder] = useState("");
  const [bColorBorder, setBColorBorder] = useState("");

  const rgbNumbers = /^\d{0,3}$/;
  const regExpEmptyStr = /^\d{1,3}$/;

  const changeRColor = (e) => {
    if (rgbNumbers.test(e.target.value) && e.target.value <= 255) {
      if (regExpEmptyStr.test(e.target.value)) {
        setRColorBorder("");
        setRColor("000");
      } else {
        setRColor(e.target.value);
        setRColorBorder("");
        console.log("записал число " + rColor);
      }
    } else {
      setRColorBorder("card__inputR__input");
    }
  };
  const changeGColor = (e) => {
    if (rgbNumbers.test(e.target.value) && e.target.value <= 255) {
      if (regExpEmptyStr.test(e.target.value)) {
        setGColorBorder("");
        setGColor("000");
      } else {
        setGColor(e.target.value);
        setGColorBorder("");
        console.log("записал число " + rColor);
      }
    } else {
      setGColorBorder("card__inputR__input");
    }
  };
  const changeBColor = (e) => {
    if (rgbNumbers.test(e.target.value) && e.target.value <= 255) {
      if (regExpEmptyStr.test(e.target.value)) {
        setBColorBorder("");
        setBColor("000");
      } else {
        setBColor(e.target.value);
        setBColorBorder("");
        console.log("записал число " + rColor);
      }
    } else {
      setBColorBorder("card__inputR__input");
    }
  };

  const addColorHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    console.log(formData);
  };

  return (
    <div>
      <form
        className={"card " + styles.card}
        type='submit'
        onSubmit={addColorHandler}
      >
        <input
          className={"form-control form-control-sm " + rColorBorder}
          type='text'
          placeholder='R'
          aria-label='.form-control-sm example'
          name='R'
          onChange={changeRColor}
          autoComplete='off'
        ></input>
        <label className={styles.card__inputR} htmlFor='R'>
          введите значение от 0 до 255
        </label>
        <input
          className={"form-control form-control-sm " + gColorBorder}
          type='text'
          placeholder='G'
          aria-label='.form-control-sm example'
          onChange={changeGColor}
          name='G'
          autoComplete='off'
        ></input>
        <label className={styles.card__inputG} htmlFor='G'>
          введите значение от 0 до 255
        </label>
        <input
          className={"form-control form-control-sm " + bColorBorder}
          type='text'
          placeholder='B'
          name='B'
          aria-label='.form-control-sm example'
          onChange={changeBColor}
          autoComplete='off'
        ></input>
        <label className={styles.card__inputB} htmlFor='B'>
          введите значение от 0 до 255
        </label>
        <button type='submit' className={"btn btn-light " + styles.btn}>
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Card;
