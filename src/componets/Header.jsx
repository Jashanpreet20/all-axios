import React, { useEffect, useState } from "react";
import { postData, UpdateApi } from "../services/getService";
import toast from "react-hot-toast";
export default function Header({ post, setPost, editData, setEditData }) {
  const [data, setData] = useState({
    title: "",
    body: "",
  });

  let isEmpty = Object.keys(editData).length === 0;
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addPost = async () => {
    try {
      const res = await postData(data);
      console.log(res.data);
      if (res.status === 201) {
        setPost([...post, res.data]); // Add the new post to the existing posts
      }

      setData({ title: "", body: "" });
    } catch (err) {
      console.log(err);
    }
  };

  async function editPost() {
    try {
      const res = await UpdateApi(editData.id, data);
      console.log(res.data);
      if (res.status === 200) {
        setPost((prev) => {
          return prev.map((curritem) => {
            return curritem.id === editData.id ? res.data : curritem;
          });
        });
      }
      setData({ title: "", body: "" });
      setEditData({});
    } catch (err) {
      console.log(err);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;

    if (action === "Add") {
      addPost();
      toast.success("Data added");
    } else if (action === "Edit") {
      editPost();
    }
  }

  useEffect(() => {
    editData &&
      setData({
        title: editData.title || "",
        body: editData.body || "",
      });
  }, [editData]);

  return (
    <div className="max-w-max px-7 mx-auto py-20">
      <div className=" bg-black px-2 py-3">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center gap-5">
            <input
              type="text"
              className={`bg-gray-900 text-darkBlue text-xl text-start outline-none ${
                data.title && "border-b-4 border-darkBlue"
              }   font-bold px-3 py-3 `}
              placeholder="Add Title"
              value={data.title}
              name={"title"}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className={`bg-gray-900 text-darkBlue text-xl text-start outline-none ${
                data.body && "border-b-4 border-darkBlue"
              }   font-bold px-3 py-3 `}
              placeholder="Add Post"
              value={data.body}
              name={"body"}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              value={isEmpty ? "Add" : "Edit"}
              className="bg-darkBlue text-black px-4 py-3 text-xl font-bold rounded-md "
            >
              {isEmpty ? "Add" : "Edit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
