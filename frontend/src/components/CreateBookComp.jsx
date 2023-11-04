import { useState } from "react";
import Backbutton from "./Backbutton";
import Spinner from "./Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBookComp = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleCreateBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setIsLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setIsLoading(false);
        enqueueSnackbar("Book Created Successfully.", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        // alert("An error happened, Please check console");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="text-3xl my-4">Create Book</h1>
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
            onClick={handleCreateBook}
          >
            Create
          </button>
        </div>
      )}
    </div>
  );
};
export default CreateBookComp;
