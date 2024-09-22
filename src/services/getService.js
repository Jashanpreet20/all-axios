import axios from "axios";

const api=axios.create({baseURL:"https://jsonplaceholder.typicode.com",});



// creating a get function
export const getData=() =>{
    return api.get("/posts");
}


export const deleteApi=(id) =>{
    return api.delete(`/posts/${id}`);
}


export const postData=(post) =>{
    return api.post("/posts",post)
}


export const UpdateApi=(id,post)=>{
    return api.put(`/posts/${id}`,post);
}