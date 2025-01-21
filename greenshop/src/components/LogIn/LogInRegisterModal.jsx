import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import LogInForm from './LogInForm'
import styles from './LogInRegisterModal.module.css'
import SignInForm from './SignInForm'

export default function LogInRegisterModal({ hideModal }) {
  const [isLogIn, setIsLogIn] = useState(true)
  const dialogRef = useRef(null)
  // const inputRef = useRef(null)
  const closeDialog = () => dialogRef.current?.close()

  function showLoginForm() {
    setIsLogIn(true)
  }

  function showRegisterForm() {
    setIsLogIn(false)
  }

  const closeOnBackDropClick = (event) => {
    const dialogElement = dialogRef.current
    // Check if the click is on the backdrop (not on the dialog content)
    if (event.target === dialogElement) {
      closeDialog()
    }
  }

  useEffect(() => {
    dialogRef.current?.showModal()
    // inputRef.current?.focus()const dialogElement = dialogRef.current;
    const dialogElement = dialogRef.current
    dialogElement.addEventListener('click', closeOnBackDropClick)

    return () => {
      dialogElement.removeEventListener('click', closeOnBackDropClick)
    }
  })

  return (
    <dialog ref={dialogRef} className={styles.dialog} onClose={hideModal}>
      <div className={styles['dialog-wrapper']}>
        <button type="button" onClick={closeDialog}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path clipRule="evenodd" d="M0.170067 0.170067C0.396823 -0.056689 0.764467 -0.056689 0.991223 0.170067L6 5.17884L11.0088 0.170067C11.2355 -0.056689 11.6032 -0.056689 11.8299 0.170067C12.0567 0.396823 12.0567 0.764467 11.8299 0.991223L6.82116 6L11.8299 11.0088C12.0567 11.2355 12.0567 11.6032 11.8299 11.8299C11.6032 12.0567 11.2355 12.0567 11.0088 11.8299L6 6.82116L0.991223 11.8299C0.764467 12.0567 0.396823 12.0567 0.170067 11.8299C-0.056689 11.6032 -0.056689 11.2355 0.170067 11.0088L5.17884 6L0.170067 0.991223C-0.056689 0.764467 -0.056689 0.396823 0.170067 0.170067Z" fill="#46A358" fillRule="evenodd" />
          </svg>
        </button>
        <header>
          <button type="button" className={clsx({ [styles['is-active']]: isLogIn === true })} onClick={showLoginForm}>Login</button>
          <button type="button" className={clsx({ [styles['is-active']]: isLogIn === false })} onClick={showRegisterForm}>Register</button>
        </header>
        {isLogIn ? <LogInForm /> : <SignInForm />}
      </div>
    </dialog>
  )
}
