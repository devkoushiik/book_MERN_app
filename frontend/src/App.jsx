import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreateBooks from "./pages/CreateBooks";
import UpdateBooks from "./pages/UpdateBooks";
import SingleBookInfo from "./pages/SingleBookInfo";

import DeleteBook from "./pages/DeleteBook";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<SingleBookInfo />} />
      <Route path="/books/edit/:id" element={<UpdateBooks />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
