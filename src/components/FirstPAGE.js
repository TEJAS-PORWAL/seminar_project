import React, {useState} from 'react'
import Navbar from './Navbar';


function FP() {
    const [text, setText]= useState("enter your text here")

  

   const handleChange= (e)=>
    {
        setText(e.target.value)
    }
  return (
      <>
     
        <Navbar />
            <div className="container" align="center" >
                <div >   
                    <textarea  className='container' placeholder={text}  id="myBox" rows="10" onChange={handleChange} />
                </div>
            </div> 
      
      </>
    
  );
}
export default FP;