import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { deleteApi, getData } from "../services/getService";
import Card from "./Card";
import Loading from "./Loading";
import Header from "./Header";

export default function Posts() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editData, setEditData] = useState({});
  const get = async () => {
    try {
      const res = await getData();
      console.log(res.data);
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const editButtonHandler = (item) => setEditData(item);

  const deleteHandler = async (id) => {
    try {
      const res = await deleteApi(id);
      console.log(res.data);
      setLoading(true);
      if (res.status === 200) {
        const newData = post.filter((currpost) => {
          return currpost.id !== id;
        });

        setPost(newData);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  useEffect(() => {
    get();
  }, []);
  return (
    <div className="bg-black max-w-full max-h-full gap-3">
      <Header post={post} setPost={setPost} editData={editData} setEditData={setEditData} />

      <div className="flex flex-wrap w-9/12 items-center justify-center mx-auto min-h-[50vh]">
        <div className="grid grid-cols-3 gap-3 gap-x-5">
          {post.map((item) => (
            <Card
              item={item}
              key={item.id}
              deleteHandler={deleteHandler}
              editButtonHandler={editButtonHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
