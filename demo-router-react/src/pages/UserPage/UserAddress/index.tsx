import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContextProvider";

const UserAddress = () => {
  const { user } = useContext(UserContext);

  if (!user) return null;

  const { city, street, suite, zipcode } = user.address;

  return (
    <div>
      <h1>Address</h1>
      <p>Street: {street}</p>
      <p>Suite: {suite}</p>
      <p>City: {city}</p>
      <p>Zipcode: {zipcode}</p>
    </div>
  );
};

export default UserAddress;
