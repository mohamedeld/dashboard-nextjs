import React from 'react'
import RightImageCard from './rightImageCard'
import styles from "./rightbar.module.css";

export default function Rightbar() {
  return (
      <div className={styles.container}>
        <RightImageCard isImage={true} notification={"🔥 Available Now"} title={"How to use the new version of the admin dashboard?"} subtitle={"Takes 4 minutes to learn"} des="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus." btn="Watch"/>
        <RightImageCard isImage={false} notification={"🚀 Coming Soon"} title={"New server actions are available, partial pre-rendering is comingup!"} subtitle={"Boost your productivity"} des={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero perspiciatis recusandae possimus."} btn={"Learn"}/>
      </div>
  )
}
