import User from "../models/User";
import { BASE_URL } from "./getPosts";

const getUser = async (id: number | undefined) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    const user: User = await response.json();

    return user;
  } catch (error) {
    throw new Error("Error while fetching user");
  }
};

export default getUser;
