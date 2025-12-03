import { createContext, useState } from "react";

export const BookContext = createContext({
     book: { name: "", description: "" },
  // default empty function so TS knows setBook exists
  setBook: (book: { name: string; description: string }) => {}
});

export function BookProvider({children}: {children: React.ReactNode})
{
    const [book, setBook] = useState({name: "", description: ""})

    return(
        <BookContext.Provider value={{ book, setBook }}>
           {children}
        </BookContext.Provider>
    )
}