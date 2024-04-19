import React from 'react'
import { addNewProduct } from '@/lib/actions';
import styles from "@/components/dashboard/products/addProduct/addProduct.module.css";
export default function AddProductPage() {
  return (
    <div className={styles.container}>
      <form action={addNewProduct} className={styles.form}>
        <input type="text" placeholder='title' name="title" required />
        <select name="category">
          <option value={"general"}>Choose a category</option>
          <option value={"kitchen"}>Kitchen</option>
          <option value={"phone"}>Phone</option>
          <option value={"computer"}>Computer</option>
        </select>
        <input type="number" placeholder='price' name="price"/> 
        <input type="number" placeholder='stock' name="stock"/> 
        <input type="text" placeholder='color' name="color"/>
        <input type="text" placeholder='size' name="size"/>
        <textarea name="desc" id="desc" rows={"15"} placeholder='Description'></textarea>
        <button className='' type='submit'>Submit</button>
      </form>
    </div>
  )
}
