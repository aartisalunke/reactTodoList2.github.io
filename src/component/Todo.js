import React from 'react'
import { useState } from 'react';
const Todo = () => {

      // ** add(create) operation **
 const [inputData, setInputData] = useState('');
 const [items, setItems] = useState([]);

 const addItem = () =>{
  if(!inputData){

  }else{
    setItems([...items, inputData]);
    setInputData('')
  }
  }
          // ** delete operation **
const  deleteItem = (id) =>{
  const updateditems = items.filter((elem, ind) =>{
    return ind !== id;
  }); 

  setItems(updateditems);
}
      // **Removeall **
const removeAll = () =>{
    setItems([]);
}


   return (
    <div className="sub-main">
       
         <div className="container col-md-12  p-3 rounded shadow-s">
         <h1 className = "text-center text-light p-3 text-shadow-lg ">TODO LIST</h1>
         <div className = "row">
           <div className = "col-12 p-3">
         
         <div className="addItems">       
           <input className='search-bar' type="text" 
           placeholder="Good morning"
           value={inputData} onChange={(e) => setInputData(e.target.value)} />
          <button className='btn btn-primary'> 
            <i className="fa fa-plus add-btn" title="add item" onClick={addItem}></i>
          </button>
          </div>
          </div>
         
 
            <div className="listItems col-12">
              {
                items.map((elem, ind) => {
                  return(
                  <div className="eachItem" key={ind}>
                  <p>{elem}
                  </p><span>
                   <i class="fa fa-trash add-btn" title="Delete Item" onClick={() => deleteItem(ind)}></i>
                   </span>
              </div>
                  )
                })
              }
              
            
            <div className='listItems'> 
              <button className="btn-primary"  data-sm-link-text="Remove All" onClick={removeAll}><span>CHECK LIST</span></button>
                
              </div> 
             
             </div>   
        </div>
        </div>
       
    </div>
  );
};

export default Todo;




  


