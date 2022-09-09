import React from "react";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div>
      <form className={"card " + styles.card}>
        <input
          className='form-control form-control-sm'
          type='text'
          placeholder='R'
          aria-label='.form-control-sm example'
          name='R'
        ></input>
        <label className={styles.card__inputR} for='R'>
          введите значение от 0 до 255
        </label>
        <input
          className='form-control form-control-sm'
          type='text'
          placeholder='G'
          aria-label='.form-control-sm example'
        ></input>
        <label className={styles.card__inputG} for='G'>
          введите значение от 0 до 255
        </label>
        <input
          className='form-control form-control-sm'
          type='text'
          placeholder='B'
          aria-label='.form-control-sm example'
        ></input>
        <label className={styles.card__inputB} for='B'>
          введите значение от 0 до 255
        </label>
        <button type='button' className={"btn btn-light " + styles.btn}>
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Card;
