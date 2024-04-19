import React from 'react'
import styles from "@/components/login/login.module.css";
import LoginForm from '@/components/login/loginForm/loginForm';
export default function LoginPage() {
  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  )
}
