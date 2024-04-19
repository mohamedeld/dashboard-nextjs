import Navbar from '@/components/dashboard/navbar/navbar'
import Sidebar from '@/components/dashboard/sidebar/sidebar'
import React from 'react'
import styles from "@/components/dashboard/dashboard.module.css";
import Footer from '@/components/dashboard/footer/footer';
export default function Layout({children}) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
  )
}
