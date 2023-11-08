import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContextProvider";

const UserBasicInfo = () => {
  const { user } = useContext(UserContext);

  if (!user) return null;

  return (
    <div>
      <h1>Basic info</h1>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserBasicInfo;
