import styles from 'styles/hero.module.css'

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && <figure> [画像] </figure>}
    </div>
  )
}
