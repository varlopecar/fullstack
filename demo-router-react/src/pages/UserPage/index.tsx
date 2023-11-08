import { useContext, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { fetchUser } from "../../services/api/jsonplaceholder/users";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContextProvider";

const UserPage = () => {
  const { user, setUser } = useContext(UserContext);

  const params = useParams();
  const id = Number(params.id);
  const isIdValid = Number.isInteger(id) && id > 0;

  useEffect(() => {
    if (!isIdValid) return;

    fetchUser(id)
      .then((user) => setUser(user))
      .catch(() => setUser(null));
  }, [id, isIdValid, setUser]);

  if (!isIdValid) return null;
  if (!user) return null;

  return (
    <div>
      <h1>User Page</h1>
      <p>{user.email}</p>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="basic-info">Basic info</Link>
        <Link to="address">User address</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default UserPage;
