import React from 'react'
import styles from "@/components/dashboard/users/singleUser/singleUser.module.css";
import Image from 'next/image';
import { fetchUser } from '@/lib/actions';
import { redirect } from 'next/navigation';
export default async function UserDetailPage({params}) {
  const {id} = params;
  const user = await fetchUser(id);
  if(!user){
    redirect("/dashboard/users");
  }
  return (
    <div className={styles.container}>
    <div className={styles.infoContainer}>
      <div className={styles.imgContainer}>
        <Image src={user?.image || "/noavatar.png"} alt="" fill />
      </div>
      
    </div>
    <div className={styles.formContainer}>
      <form action={""} className={styles.form}>
        <input type="hidden" name="id" value={user?.id}/>
        <label>Username</label>
        <input type="text" name="username" placeholder={user.username} value={user?.username} />
        <label>Email</label>
        <input type="email" name="email" placeholder={user.email} value={user?.email} />
        <label>Password</label>
        <input type="password" name="password"  value={user?.password} />
        <label>Phone</label>
        <input type="text" name="phone" placeholder={""}  value={user?.phone}/>
        <label>Address</label>
        <textarea type="text" name="address" placeholder={"user.address"}  value={user?.address}/>
        <label>Is Admin?</label>
        <select name="isAdmin" id="isAdmin"  value={user?.isAdmin}>
          <option value={true} >Yes</option>
          <option value={false}>No</option>
        </select>
        <label>Is Active?</label>
        <select name="isActive" id="isActive"  value={user?.isActive}>
          <option value={true} >Yes</option>
          <option value={false}>No</option>
        </select>
        <button>Update</button>
      </form>
    </div>
  </div>
  )
}
