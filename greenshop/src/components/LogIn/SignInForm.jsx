import Link from 'next/link'
import styles from './LogInRegisterModal.module.css'

export default function SignInForm() {
  return (
    <article className={styles['form-block']}>
      <h3>Enter your email and password to register.</h3>
      <form action="submit">
        <input type="text" name="username" id="username" placeholder="Username" />
        <input type="email" name="email" id="email" placeholder="almamun_uxui@outlook.com" />
        <input type="password" name="password" id="password" placeholder="Enter password" />
        <input type="password" name="password" id="password" placeholder="Confirm password" />
        <button type="submit">Sign in</button>
      </form>
      <p>Or login with</p>
      <a href="#">Login with Google</a>
      <a href="#">Login with Facebook</a>
    </article>
  )
}
