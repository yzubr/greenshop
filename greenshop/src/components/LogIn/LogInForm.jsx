import Link from 'next/link'
import styles from './LogInRegisterModal.module.css'

export default function LogInForm() {
  return (
    <article className={styles['form-block']}>
      <h3>Enter your username and password to login.</h3>
      <form action="submit">
        {/* <label htmlFor="email" /> */}
        <input type="email" name="email" id="email" placeholder="almamun_uxui@outlook.com" />
        {/* <label htmlFor="email" /> */}
        <input type="password" name="password" id="password" placeholder="Enter password" />
        <Link href="#">Forgot Password?</Link>
        <button type="submit">Login</button>
      </form>
      <p>Or login with</p>
      <a href="#">Login with Google</a>
      <a href="#">Login with Facebook</a>
    </article>
  )
}
