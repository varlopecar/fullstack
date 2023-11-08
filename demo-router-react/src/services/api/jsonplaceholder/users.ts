import { rootUrl } from ".";
import { User } from "../../../models/User";

const usersUrl = `${rootUrl}/users`;

export async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`${usersUrl}/${id}`);
  if (!response.ok) return Promise.reject(response);

  const user = await response.json();
  return user as User;
}

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch(`${usersUrl}`);
  if (!response.ok) return Promise.reject(response);

  const users = await response.json();
  return users as User[];
}
