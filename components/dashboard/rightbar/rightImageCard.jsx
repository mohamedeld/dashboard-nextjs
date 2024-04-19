import React from 'react'
import Image from 'next/image';
import { MdPlayCircleFilled } from 'react-icons/md';
import styles from "./rightbar.module.css";
export default function RightImageCard({isImage,notification,title,subtitle,des,btn}) {
  return (
    <>
      <div className={styles.item}>
        {isImage && <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="rightbar image" fill className={styles.bg}/>
        </div>}
        <div className={styles.texts}>
        <span className={styles.notification}>{notification}</span>
          <h3 className={styles.title}>
            {title}
            
          </h3>
          <span className={styles.subtitle}>{subtitle}</span>
          <p className={styles.desc}>
            {des}
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            {btn}
          </button>
        </div>
      </div>
    </>
  )
}
