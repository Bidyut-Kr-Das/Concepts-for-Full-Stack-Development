import { useContext } from "react";
import { BookContext } from "./BookContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Page1()
{
  const ctx = useContext(BookContext)!;

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const navigate = useNavigate()

  const handleSubmitting = (e) => {
   e.preventDefault()
   ctx.setBook({name, description});

   navigate("/page2")
  }
  

  return(
    <div>
    <h2>(<em><span style={{color: 'orange'}}>Page 1</span></em>: <strong style={{color: 'darkblue'}}> Form</strong>)</h2>
    <form onSubmit={handleSubmitting}>
      <input placeholder="Enter book name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="border border-gray-300 px-3 py-2 rounded w-full max-w-md"
      />

      <br />
      <br />
      <textarea placeholder="Enter description of book" value={description}
      onChange={(e) => setDescription(e.target.value)}
       className="border border-gray-300 px-3 py-2 rounded w-full max-w-md"
       
      />

      <br />
         

      <button type="submit" style={{borderRadius: '10px',marginTop: '10px', color: 'black', backgroundColor: 'lightblue', padding: '7px'}} >Submit</button>
      
    </form>
    </div>
  )
}