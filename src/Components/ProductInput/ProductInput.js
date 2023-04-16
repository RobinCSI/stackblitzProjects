import React, {useState,useRef} from 'react'
import DropdownList from "react-widgets/DropdownList"

import styles from './ProductInput.module.css'

export default function ProductInput(){

  const [qty, setQty]=useState(0)

  const productsArr=[{product: "Sugar", productID: 1, productQty:0}, {product: "Oats", productID: 2, productQty:0}, {product: "Coffee", productID: 3, productQty:0}, {product: "Snacks", productID: 4, productQty:0}]

  const products=useRef(productsArr)


  function inputQty(){

    products.map(prodt=>(prodt.product==value? prodt.productQty+=qty : prodt))

  }

  function alertWhenSelected(event){

    console.log(event.target.value)
  }


  return(

    <div className={styles.productInput}>
      <div className={styles.selectProduct}>
        <label>Select Product</label>
        <DropdownList
    defaultValue="Select" dataKey="productID" textField="product" onSelect={alertWhenSelected}
    data={products}
  />
      </div>
      <div className={styles.selectQty}>
        <label>Select quantity</label>
        <input type="number" onChange={inputQty} value={qty} />
      </div>
      <button>Add more products</button>
    </div>
  )
}