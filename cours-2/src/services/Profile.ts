import { User } from "../models/User";
import z from "zod";

const API_URL = "https://jsonplaceholder.typicode.com/users/";

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  address: z.object({
    street: z.string(),
    suite: z.string(),
    city: z.string(),
    zipcode: z.string(),
    geo: z.object({
      lat: z.string(),
      lng: z.string(),
    }),
  }),
  phone: z.string(),
  website: z.string(),
  company: z.object({
    name: z.string(),
    catchPhrase: z.string(),
    bs: z.string(),
  }),
});

export const getProfile = async (id: number): Promise<User> => {
  const response = await fetch(`${API_URL}${id}`);
  const data = await response.json();
  const validatedData = userSchema.parse(data);
  return validatedData;
};
