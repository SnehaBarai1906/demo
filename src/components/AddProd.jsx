import React, { useState } from 'react'
import Navbar from '../Navbar'

function AddProd() {
    const [dataObj,setdataObj] =useState({});
    const [Title,setTitle] =useState("");
    const [description,setdescription] =useState("");
    const [category,setcategory] =useState("");
    const [image,setimage] =useState("");
    const [rating,setrating] =useState("");
    const [count,setcount] =useState(0);
    const [price,setprice] =useState(0);

    async function pushdata(){
        let obj ={
            id :Date.now()+Math.random(),
            Title,
            desc: description, 
            price,
            category  ,
            image:image,
            rating,
            count

        }
        let res=await fetch('http://localhost:3000/data',{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(obj) 
        });         
        let data =await res.json();
        console.log(data);
    
    }


  return ( 
    <div>
      AddProd
      <Navbar/>
      <input type="text" placeholder='Title' onChange={(e)=>{setTitle(e.target.value)}}/>
      <input type="text" placeholder='price' onChange={(e)=>{setprice(e.target.value)}}/>
      <input type="text" placeholder='description' onChange={(e)=>{setdescription(e.target.value)}}/>
      <input type="text" placeholder='category' onChange={(e)=>{setcategory(e.target.value)}}/>
      <input type="text" placeholder='image' onChange={(e)=>{setimage(e.target.value)}}/>
      <input type="text" placeholder='rating' onChange={(e)=>{setrating(e.target.value)}}/>
      <input type="text" placeholder='count' onChange={(e)=>{setcount(e.target.value)}}/>

    <button onClick={pushdata}>click</button>
    </div>
  )
}

export default AddProd
