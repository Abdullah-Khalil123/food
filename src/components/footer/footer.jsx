import styles from './footer.module.css'
export const Footer = () => {
  return (
    <>
    <footer className={styles.footer}>
        <div className={styles.footerFirst}>© 2024 Restaurant Name.</div>
        <div className={styles.footerFirst}>Powered By HorizonWebWorks.com</div>
    </footer>
    </>
  )
}
