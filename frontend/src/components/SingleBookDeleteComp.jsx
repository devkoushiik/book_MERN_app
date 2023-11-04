import axios from "axios";
import Backbutton from "./Backbutton";
import Spinner from "./Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useSnackbar } from "notistack";

const SingleBookDeleteComp = () => {
  const [isLoading, setIsLoading] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const handleDeleteBook = () => {
    setIsLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setIsLoading(false);
        enqueueSnackbar("Book deleted Successfully.", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        enqueueSnackbar("Something went wrong.", { variant: "success" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-2xl">
            Are you sure you want to delete this book ?
          </h3>
          <button
            onClick={handleDeleteBook}
            className="p-4 bg-red-600 text-white m-8 w-full"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
export default SingleBookDeleteComp;
