import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import styles from "./card.module.css";
import "./index.css";

const Card = () => {
  const [rColor, setRColor] = useState("Не указано значение");
  const [gColor, setGColor] = useState("Не указано значение");
  const [bColor, setBColor] = useState("Не указано значение");

  const [rColorBorder, setRColorBorder] = useState("card__inputR__input");
  const [gColorBorder, setGColorBorder] = useState("card__inputR__input");
  const [bColorBorder, setBColorBorder] = useState("card__inputR__input");

  const stateColor = {
    R: rColor,
    G: gColor,
    B: bColor,
  };

  // console.log({ stateColor });

  const changeRColor = (e) => {
    const value = e.target.value.trim();

    if (regExpEmptyStr.test(value) && value <= 255) {
      setRColor(value.padStart(3, "0"));
      setRColorBorder("");
    } else {
      const regExpSpace = /\s/g;
      setRColor(
        "Не верное значение R: " +
          (value === ""
            ? "значение не указанно"
            : regExpSpace.test(value)
            ? "Нужно убрать пробелы"
            : value)
      );
      setRColorBorder("card__inputR__input");
    }
  };

  const changeGColor = (e) => {
    const value = e.target.value.trim();

    if (regExpEmptyStr.test(value) && value <= 255) {
      setGColor(value.padStart(3, "0"));
      setGColorBorder("");
    } else {
      const regExpSpace = /\s/g;
      setGColor(
        "Не верное значение G: " +
          (value === ""
            ? "значение не указанно"
            : regExpSpace.test(value)
            ? "Нужно убрать пробелы"
            : value)
      );
      setGColorBorder("card__inputG__input");
    }
  };
  const changeBColor = (e) => {
    const value = e.target.value.trim();

    if (regExpEmptyStr.test(value) && value <= 255) {
      setBColor(value.padStart(3, "0"));
      setBColorBorder("");
    } else {
      const regExpSpace = /\s/g;
      setBColor(
        "Не верное значение B: " +
          (value === ""
            ? "значение не указанно"
            : regExpSpace.test(value)
            ? "Нужно убрать пробелы"
            : value)
      );
      setBColorBorder("card__inputB__input");
    }
  };

  // const addColorClickHandler = (e) => {
  //   e.preventDefault();

  //   const rgbNumbers = /^\d{1,3}$/;

  //   let flag;

  //   for (let key in stateColor) {
  //     if (stateColor.hasOwnProperty(key)) {
  //       stateColor[key] = stateColor[key];
  //       if (!rgbNumbers.test(stateColor[key]) || stateColor[key] >= 256) {
  //         flag ? (flag += `, \n${stateColor[key]}`) : (flag = stateColor[key]);
  //       }
  //     }
  //   }

  //   flag ? alert(flag) : console.log("Всё чётко");
  //   // записывать в state
  // };

  const regExpEmptyStr = /^\d{1,3}$/;

  /*
  useEffect(() => {
    const rgbNumbers = /^\d{1,3}$/;
    const cloneStateColor = stateColor;
    let flag;
    console.log("USE EFFECT");
    for (let key in stateColor) {
      if (cloneStateColor.hasOwnProperty(key)) {
        // console.log(cloneStateColor[key]);
        // cloneStateColor[key] = cloneStateColor[key];
        // debugger;
        if (
          cloneStateColor[key] >= 256 ||
          !rgbNumbers.test(cloneStateColor[key])
        ) {
          flag = false;
        } else flag = true;
      }
    }

    disabled.current = flag;
    console.log(disabled.current);
  }, [rColor, gColor, bColor]);

  const addColorClickHandler = (e) => {
    console.log("отправка формы");
  };
*/
  const [btnDis, setBtnDis] = useState(true);

  // let disabled = useRef();
  // console.log(disabled.current);
  useEffect(() => {
    // debugger;
    if (
      rColorBorder.length > 1 ||
      gColorBorder.length > 1 ||
      bColorBorder.length > 1
    ) {
      setBtnDis(true);
    } else setBtnDis(false);
  }, [rColorBorder, gColorBorder, bColorBorder]);

  const addColorClickHandler = (e) => {
    console.log("отправка формы");
  };

  return (
    <div>
      <form className={"card " + styles.card}>
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
        <button
          disabled={btnDis}
          id='btnConfirm'
          type='button'
          className={"btn btn-light " + styles.btn}
          onClick={addColorClickHandler}
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Card;
