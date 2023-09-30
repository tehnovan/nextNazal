
import styles from './ui/Card.module.scss'
export default function InputCard() {
    return (
        <>

            <div>
                <label className={styles.labelhead}>Заголовок</label>
                <input type="text" className={styles.inputhead} />
            </div>
            <div className="mb-6">
                <label className={styles.labelhead}>Устройство</label>
                <input type="text" className={styles.inputdevice} />
            </div>


        </>
    )
}
