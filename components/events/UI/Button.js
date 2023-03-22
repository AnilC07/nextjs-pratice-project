import Link from 'next/link'
import styles from './button.module.css'

const Button = ({children, link}) => {
  if(link){
    return <Link href={link} className={styles.btn}>{children}</Link>
  }
  return (
    <button className={styles.btn} >{children}</button>
  )
}

export default Button