import { useEffect, useState } from 'react'
import { Route,Routes,useNavigate,Link, json } from 'react-router-dom'
import AddProd from './components/AddProd'
import Home from './components/Home'
import Login from './components/Login'


function App() {
  const [count, setCount] = useState(0)
  const [ecomm,setecomm]=useState([]);
  
  async function fetchdata(){
    let res = await fetch('http://localhost:3000/data');
    let data= await res.json();
    setecomm(data);
  }
  
  useEffect(()=>{
    fetchdata()
  },[])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home data={ecomm}/>}/>
        <Route path='/addProduct' element={<AddProd/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
    </>
  )
}

export default App
