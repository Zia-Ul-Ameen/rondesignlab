import React from "react";
import s from "./userDetails.module.css";

const page = () => {
  return (
    <div className={s.content}>
      <h6 className={s.title}>Enter your details</h6>
      <form className={s.form}>
        <label className={s.label}>
          Name:{" "}
          <input
            type="text"
            placeholder="Enter your name"
            required
            className={s.input}
          />
        </label>

        <label className={`input ${s.label}`}>
          age:{" "}
          <input
            type="number"
            placeholder="Enter your age"
            required
            className={s.input}
          />
        </label>

        <label className={s.label}>
          place:{" "}
          <input
            type="text"
            placeholder="Enter your place"
            required
            className={s.input}
          />
        </label>

        <button className={s.button}>Submit</button>
      </form>
    </div>
  );
};

export default page;
