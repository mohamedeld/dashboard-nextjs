import Image from 'next/image'
import React from 'react'
import styles from "@/components/dashboard/products/singleProduct/singleProduct.module.css"
import { fetchProduct } from '@/lib/actions';
import { redirect } from 'next/navigation';
export default async function ProductDetailPage({params}) {
  const {id} = params;
  const product = await fetchProduct(id);
  if(!product){
    redirect("/dashboard/products");
  } 
  return (
    <>
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product?.image || "/noavatar.png"} alt={product?.title} fill />
        </div>
        {"product.title"}
      </div>
      <div className={styles.formContainer}>
        <form action={""} className={styles.form}>
          <input type="hidden" name="id" value={product?.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} value={product?.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} value={product?.price}/>
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} value={product?.stock} />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color}
            value={product?.color}
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={product.size}
            value={product?.size}
          />
          <label>Cat</label>
          <select name="cat" id="cat" value={product?.cat}>
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={product.desc}
            value={product?.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
    </>
  )
}
