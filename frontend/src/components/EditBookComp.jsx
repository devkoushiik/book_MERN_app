import { useEffect, useState } from "react";
import Backbutton from "./Backbutton";
import Spinner from "./Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBookComp = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setAuthor(res.data.data.author);
        setTitle(res.data.data.title);
        setPublishYear(res.data.data.publishYear);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        alert("Something went wrong check console.");
        console.log(error);
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setIsLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setIsLoading(false);
        enqueueSnackbar("Book Edited Successfully.", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        enqueueSnackbar("Something went wrong.", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-grey-500">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-grey-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-grey-500">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-grey-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-grey-500">Publish Year</label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-grey-500 px-4 py-2 w-full"
            />
          </div>
          <button
            className="p-2 bg-sky-300 rounded-md"
            onClick={handleEditBook}
          >
            Create
          </button>
        </div>
      )}
    </div>
  );
};
export default EditBookComp;
