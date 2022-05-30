import axios from "axios";

const server = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",  
});

export interface PostType{
    userId: number;
    id: number;
    title: string;
    body: string;
}

//get all post asynchronously
const getPosts = async() => {
    const { data } = await server.get<PostType[]>("/posts");
    return data;
}

export { getPosts };