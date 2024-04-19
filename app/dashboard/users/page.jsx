import React from "react";
import styles from "@/components/dashboard/users/users.module.css";
import Search from "@/components/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/dashboard/pagination/pagination";
import { fetchUsers } from "@/lib/data";
export default async function UsersPage({searchParams}) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count,users} = await fetchUsers(q,page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placholder={"Search for a user"} />
        <Link href={"/dashboard/users/add"}>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>CreatedAt</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>
                  <div className={styles.user}>
                    <Image
                      src={user.image || "/noavatar.png"}
                      alt="user image"
                      width={50}
                      height={40}
                      className={styles.userImage}
                    />
                    {user.username}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4,16)}</td>
                <td>{user.isAdmin ? "Admin" : 'Client'}</td>
                <td>{user.isActive ? 'Active' : 'Not Active'}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/users/${user._id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
}
