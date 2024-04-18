import React from 'react'
import styles from "./transactions.module.css";
import Image from 'next/image';
export default function Transactions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="user image" width={40} height={40} className={styles.userImage}/>Mohamed
              </div>
            </td>
            <td>
              <span  className={`${styles.status} ${styles.pending}`}>Pending</span>
              </td>
            <td>12.4.32324</td>
            <td>$3.200</td>
          </tr>
          <tr>
          <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="user image" width={40} height={40} className={styles.userImage}/>Mohamed
              </div>
            </td>
            <td>
              <span  className={`${styles.status} ${styles.pending}`}>Pending</span>
              </td>
            <td>12.4.32324</td>
            <td>$3.200</td>
          </tr>
          <tr>
          <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="user image" width={40} height={40} className={styles.userImage}/>Mohamed
              </div>
            </td>
            <td>
              <span  className={`${styles.status} ${styles.pending}`}>Pending</span>
              </td>
            <td>12.4.32324</td>
            <td>$3.200</td>
          </tr>
          <tr>
          <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="user image" width={40} height={40} className={styles.userImage}/>Mohamed
              </div>
            </td>
            <td>
              <span  className={`${styles.status} ${styles.pending}`}>Pending</span>
              </td>
            <td>12.4.32324</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
