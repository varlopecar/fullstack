import { useEffect, useState } from "react";
import { User } from "../../models/User";
import { fetchUsers } from "../../services/api/jsonplaceholder/users";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers()
      .then((users) => setUsers(users))
      .catch(() => setUsers([]));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
