import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineAddBox } from "react-icons/md";
import Spinner from "./Spinner";
import BooksTable from "../components/home/BooksTable";
import BookCard from "../components/home/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [showType, setShowType] = useState("table");

  const dataFetching = async () => {
    try {
      setLoading(true);
      const {
        data: { data },
      } = await axios.get("http://localhost:5555/books");
      setBooks(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(books, "from home");

  // fetching data
  useEffect(() => {
    dataFetching();
  }, []);

  return (
    <>
      <div className="-z-50 fixed bg-fixed-background opacity-10">
        <img className="bg-cover bg-center" src="flower.svg" alt="flower" />
      </div>
      <div className="p-4 relative">
        <div>
          <div className="flex justify-center items-center mt-5 gap-x-4">
            <button
              className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
              onClick={() => setShowType("table")}
            >
              Table
            </button>
            <button
              className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
              onClick={() => setShowType("card")}
            >
              Card
            </button>
          </div>
          <p className="italic font-sm flex justify-center mt-3">
            <mark>Click on Card for card view.</mark>
          </p>
        </div>

        <div>
          <h1 className="text-3xl my-8 mx-5 text-center font-bold">
            Future Books from{" "}
            <abbr title="Bangladesh University Of Business And Technology.">
              <span className="mr-3">BUBT</span>
            </abbr>
            <span>Intake-42</span>
          </h1>
          <Link to={"/books/create"}>
            <MdOutlineAddBox className="text-sky-800 text-4xl items-center ml-2" />
          </Link>
        </div>
        {isLoading ? (
          <Spinner />
        ) : showType === "table" ? (
          <BooksTable books={books} />
        ) : (
          <BookCard books={books} />
        )}
      </div>
    </>
  );
};
export default Home;
