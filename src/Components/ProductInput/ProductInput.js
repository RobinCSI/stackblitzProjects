import React, {useState,useRef} from 'react'
import DropdownList from "react-widgets/DropdownList"

import styles from './ProductInput.module.css'

export default function ProductInput(){
  // const productsArr=[{product: "Sugar", productID: 1, productQty:0}, {product: "Oats", productID: 2, productQty:0}, {product: "Coffee", productID: 3, productQty:0}, {product: "Snacks", productID: 4, productQty:0}]
  const [qty, setQty]=useState(0)
  const products=useRef([{product: "Sugar", productID: 1, productQty:0}, {product: "Oats", productID: 2, productQty:0}, {product: "Coffee", productID: 3, productQty:0}, {product: "Snacks", productID: 4, productQty:0}])

  function handleSubmit(e){
    e.preventDefault()
    console.log(e.target)
    
  }

  }


  function inputQty(){

    products.current.map(prodt=>(prodt.product==value? setQty(prodt.productQty+qty) : prodt))

  }

  // function alertWhenSelected(){

  //   alert('selected!')
  // }


  return(

    <div className={styles.productInput}>
      <form onSubmit={handleSubmit}>
      <div className={styles.selectProduct}>
      
        <label>Select Product
        <select name="selectedProduct" defaultValue="select">
        {products.current.map(prodt=><option value={prodt}>{prodt.product}</option>)}
          {/* <option value="Sugar">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option> */}
        </select>
        </label>
        {/* <DropdownList
    defaultValue="Select" dataKey="productID" textField="product" onSelect={alertWhenSelected}
    data={products.current}
  /> */}
      </div>
      <div className={styles.selectQty}>
        <label>Select quantity
        <input type="number" onChange={inputQty} value={qty} />
        </label>
      </div>
      <button type="submit">Add more products</button>
      </form>
    </div>
  )
}