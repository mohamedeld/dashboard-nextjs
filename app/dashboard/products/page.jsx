import Pagination from '@/components/dashboard/pagination/pagination'
import Search from '@/components/dashboard/search/search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "@/components/dashboard/products/products.module.css"
import { fetchProducts } from '@/lib/data'
import { deleteProduct } from '@/lib/actions'
export default async function ProductsPage({searchParams}) {
  const q = searchParams?.q || '';
  const page = searchParams?.page || 1;
  const {count,products} = await fetchProducts(q,page); 
  console.log(products)
  return (
    <>
      <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
         
            {products.map(product=>{
              return (
                <tr key={product._id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={product?.image || "/noproduct.jpg"}
                    alt={product?.title}
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product?.title}
                </div>
              </td>
              <td>{product?.desc?.slice(0,12)}...</td>
              <td>${product?.price}</td>
              <td>createdAt</td>
              <td>{product?.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
              )
            })}
          
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
    </>
  )
}
