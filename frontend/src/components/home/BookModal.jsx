import { AiOutlineClose, AiOutlineNumber } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";

const BookModal = ({ item, onClose }) => {
  return (
    <div
      className="fixed bg-blue-800 bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <div>
          <h2 className="w-fit right-2 px-4 py-1 bg-red-100 rounded-lg mt-2 mr-2">
            {item.author} ✒️
          </h2>
          <div className="flex mt-8 items-center">
            <AiOutlineNumber className="text-2xl text-red-600 mr-2" />
            <h4 className="my-2 text-grey-500">
              Concept behind writters book.
            </h4>
          </div>
          <div className="flex justify-start items-center gap-x-4">
            <p className="mb-8 px-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda accusantium nihil laudantium odio similique praesentium
              doloremque enim iure ut consequuntur. Ipsum quas et, ad
              dignissimos maxime consequatur iste necessitatibus numquam.
            </p>
          </div>{" "}
          <span className="">
            <mark className="italic font-sm">
              This description feature is not implemented yet! Hope this will
              implement soon.
            </mark>
            <span className="block text-center mt-5">😔😔😔</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default BookModal;
