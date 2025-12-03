import { BookContext } from "./BookContext";
import { useContext } from "react";

function Page2()
{
    const ctx = useContext(BookContext);

    return(
        <div className="p-6">
            <h2><em><span style={{color: 'blue'}}>Page 2</span></em> -- <strong style={{color: 'grey'}}>Displaying Book Details: </strong></h2>
            
            <br />

            <p className="text-lg"> <strong>Book Name: </strong>
            <span className="text-purple-500 font-bold"> {ctx.book.name} </span></p>
              
            <br /><br />

            <p className="text-lg"> <strong>Book Description: </strong>
            <span className="text-purple-500 font-bold"> {ctx.book.description} </span></p>
        </div>
    )
}

export default Page2