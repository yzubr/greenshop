'use client'

import { useState } from 'react'
import styles from '@/style/components.module.css'
import LogInRegisterModal from './LogInRegisterModal'

export default function LogInRegisterModalOpen() {
  const [isVisible, setIsVisible] = useState(false)

  function showModal() {
    setIsVisible(true)
  }

  function hideModal() {
    setIsVisible(false)
  }

  return (
    <>
      <button type="button" className={styles.button} onClick={showModal}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M18.1601 10.1006H8.12598" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M15.7212 7.67059L18.1612 10.1006L15.7212 12.5306" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M13.6342 6.35823C13.3592 3.3749 12.2425 2.29156 7.80082 2.29156C1.88332 2.29156 1.88332 4.21656 1.88332 9.9999C1.88332 15.7832 1.88332 17.7082 7.80082 17.7082C12.2425 17.7082 13.3592 16.6249 13.6342 13.6416" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
        Login
      </button>
      {isVisible && (
        <LogInRegisterModal hideModal={hideModal} />
      )}
    </>
  )
}
