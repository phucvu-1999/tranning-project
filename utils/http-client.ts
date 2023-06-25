import axios from "axios";

const request = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getAsync = async (url: string = "") => {
  try {
    return await request.get(url);
  } catch (err) {
    console.log("err: ", err);
  }
};
