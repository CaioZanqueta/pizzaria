import styles from './styles.module.scss'
import { X } from 'lucide-react'

export function ModalOrder() {
  return (
    <dialog className={styles.dialogContainer}>
      <section className={styles.dialogContent}>
        <button className={styles.dialogBack}>
          <X size={40} color='#FF3f4b' />
        </button>

        <article className={styles.container}>
          <h2>Detalhes do pedido</h2>

          <span className={styles.table}>
            Mesa <b>1</b>
          </span>

          <section className={styles.item}>
            <span>1 - <b>Pizza de Calabresa</b></span>
            <span className={styles.description}>Pizza massa</span>
          </section>

          <section className={styles.item}>
            <span>3 - <b>Pizza de Catupiry</b></span>
            <span className={styles.description}>Pizza massa</span>
          </section>

          <button className={styles.buttonOrder}>
            Concluir pedido
          </button>
        </article>

      </section>
    </dialog>
  )
}