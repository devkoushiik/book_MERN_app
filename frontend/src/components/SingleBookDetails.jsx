import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";

const ShowAllBooks = () => {
  const [book, setBook] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  console.log(book, "single book");

  const getSingleBook = async () => {
    try {
      setIsLoading(true);
      const book = await axios.get(`http://localhost:5555/books/${id}`);

      setBook(book.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSingleBook();
  }, []);

  return (
    <div className="p-10">
      <Backbutton destination="/" />
      <h1 className="text-3xl my-4">Book Details</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Id</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Title</span>
            <span>{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Author</span>
            <span>{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Create Time</span>
            <span>{new Date(book.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Create Time</span>
            <span>{new Date(book.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default ShowAllBooks;
