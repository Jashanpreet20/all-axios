import React from "react";

export default function Card({ item, deleteHandler ,editButtonHandler}) {
  return (
    <div
      className="min-w-min flex flex-col items-start rounded-md border-l-4 text-gray-400  border-darkBlue 
     bg-gray-900 px-3 py-10 overflow-hidden"
    >
      <p>{item.id}</p>
      <p>
        <span className="text-gray-300 text-xl">Title </span>
        {item.title}
      </p>
      <p>
        <span className="text-gray-300 text-xl">News </span>
        {item.body}
      </p>

      <div className="flex items-start justify-start gap-5 font-bold mt-4">
        <button
          className="px-7 py-2 rounded-md text-black text-balance bg-darkBlue"
          onClick={() => editButtonHandler(item)}
        >
          Edit
        </button>
        <button
          onClick={() => deleteHandler(item.id)}
          className="px-7 py-2 rounded-md text-black text-balance bg-darkBlue"
        >
          {" "}
          Delete
        </button>
      </div>
    </div>
  );
}
