import React,{createContext,useState,useEffect} from 'react';
export const ItemMenuContext =createContext();
 const ItemMenuProvider=({children})=>{
  const[Items,setItems]=useState([]);

  useEffect(()=>{
    const fetchItems=async()=>{
      const response=await fetch('http://localhost:8002/items');
      const data=await response.json();
      setItems(data);
    }
    fetchItems();
  },[])
  
  return <ItemMenuContext.Provider value={{Items}}>{children}</ItemMenuContext.Provider>
}


export default ItemMenuProvider;
