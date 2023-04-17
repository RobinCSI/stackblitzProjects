import React, {useState,useRef} from 'react'
import DropdownList from "react-widgets/DropdownList"

import styles from './ProductInput.module.css'

export default function ProductInput(){
  // const productsArr=[{product: "Sugar", productID: 1, productQty:0}, {product: "Oats", productID: 2, productQty:0}, {product: "Coffee", productID: 3, productQty:0}, {product: "Snacks", productID: 4, productQty:0}]
  const [qty, setQty]=useState(0)
  const [selected, setSelected]=useState('')

  const products=useRef([{product: "Sugar", productID: 1, productQty:0}, {product: "Oats", productID: 2, productQty:0}, {product: "Coffee", productID: 3, productQty:0}, {product: "Snacks", productID: 4, productQty:0}])

  function handleSubmit(e){
    e.preventDefault()
    const form=e.target
    const formData=new FormData(form)
    console.log([...formData.entries()][0])

    // // Prevent the browser from reloading the page
    // e.preventDefault();
    // // Read the form data
    // const form = e.target;
    // const formData = new FormData(form);
    // // You can pass formData as a fetch body directly:
    // fetch('/some-api', { method: form.method, body: formData });
    // // You can generate a URL out of it, as the browser does by default:
    // console.log(new URLSearchParams(formData).toString());
    // // You can work with it as a plain object.
    // const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson); // (!) This doesn't include multiple select values
    // // Or you can get an array of name-value pairs.
    // console.log([...formData.entries()]);
    
  

  }


  function inputQty(){

    products.current.map(prodt=>(prodt.product==selected? setQty(prodt.productQty+qty) : prodt))
    setSelected('')

  }

  // function alertWhenSelected(){

  //   alert('selected!')
  // }


  return(

    <div className={styles.productInput}>
      <form method="post" onSubmit={handleSubmit}>
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
      {/* <div className={styles.selectQty}>
        <label>Select quantity
        <input type="number" onChange={inputQty} value={qty} />
        </label>
      </div> */}
      <button type="submit">Add more products</button>
      </form>
    </div>
  )
}