import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";




export default function Blogcard({
    blog,
    onEdit,
    onDelete
  }:any) {
    const formattedDate = moment(blog?.timestamp)?.format('MMMM Do, YYYY');
    return (
        <div className="bg-white shadow rounded-md p-4 mb-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-4">
          <div className="w-full md:w-24 h-24 overflow-hidden rounded mb-4 md:mb-0">
            <img src={blog?.cover} alt={blog?.title} className="w-full h-full object-cover" />
          </div>
          <div className="w-full">
            <h3 className="text-lg font-bold text-blue-500">{blog?.title}</h3>
            <p className="text-sm text-gray-500">{blog?.summary}</p>
            <p className="text-sm text-gray-400">Published on: {formattedDate}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <button className="w-full md:w-1/2 flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => onEdit("editblog",blog)}>
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            Edit
          </button>
          <button  className="w-full md:w-1/2 flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700" onClick={() => onDelete(blog?._id)}>
            <FontAwesomeIcon icon={faTrash} className="mr-2" />
            Delete
          </button>
        </div>
      </div>
    )
}
  