import React from 'react'

const Card =({img,title,desc,price,addToCart})=> {
  return (
    <div>
        <img src={img} alt="" />
        <h1>{title}</h1>
        <p>{desc}</p>
        <h3>{price}</h3>
        <button onClick={addToCart}>Add to cart</button>
    </div>
  )  
}

export default Card
