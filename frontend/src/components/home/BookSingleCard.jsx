import { useState } from "react";
import { Link } from "react-router-dom";

import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit, AiOutlineNumber } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import BookModal from "./BookModal";

const BookSingleCard = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      key={item._id}
      className="border-2 border-grey-500 rounded-lg px-4 py-5 relative hover:shadow-xl"
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-100 rounded-lg mt-2 mr-2">
        {item.publishYear}
      </h2>
      <div className="flex mt-8 items-center">
        <AiOutlineNumber className="text-2xl text-red-600 mr-2" />
        <h4 className="my-2 text-grey-500">{item._id}</h4>
      </div>

      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-600 text-2xl" />
        <h2 className="my-1">{item.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-600 text-2xl" />
        <h2 className="my-1">{item.author}</h2>
      </div>

      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${item._id}`}>
          <BsInfoCircle className="text-2xl cursor-pointer text-green-800 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${item._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${item._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
      {showModal && (
        <BookModal item={item} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};
export default BookSingleCard;
