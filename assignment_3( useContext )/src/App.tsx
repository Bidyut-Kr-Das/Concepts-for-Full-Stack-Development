import { Link, Route, Routes } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import { BookProvider } from "./components/BookContext";

const App = () => {

  return(
    <BookProvider>
      <nav>
        <Link to="/page1"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >Page 1(click here)</Link>{" "}

        <br />
        <br />
        <Link to="/page2"
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >Page 2(click here)</Link>
        
      </nav>

      <br />

    <Routes>
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
    </Routes>
    </BookProvider>
  )
}

export default App