import { infoDb } from "../types"
import styles from './Card.module.scss'
export default function Card(props: infoDb) {
  return (
    <>

      <a href="#" className={styles.link}>
        <h5 className={styles.h5}>{props.head}</h5>
        <p className={styles.p}>
        {props.text}
        </p>
      </a>

    </>
  )
}
