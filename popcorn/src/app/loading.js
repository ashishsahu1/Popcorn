import React from 'react'
import styles from '../app/styles/loading.module.css'

export default function loading() {
  return (
    <section className={styles.loader}>
      <div className={styles.ldsroller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
