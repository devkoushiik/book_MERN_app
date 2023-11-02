import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreateBooks from "./pages/CreateBooks";
import UpdateBooks from "./pages/UpdateBooks";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<EditBook />} />
      <Route path="/books/edit/:id" element={<UpdateBooks />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
