import React from "react";
import styles from "./moduleStyle.module.css";

export default function Module() {
  console.log(styles);
  return (
    <div className={styles.container}>
      <div className={styles.hi}>hi</div>
      <div className={styles.kesav}>i am kesav</div>
    </div>
  );
}
