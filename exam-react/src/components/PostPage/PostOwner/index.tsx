import User from "../../../models/User"
import UserCard from "./UserCard"

const newUser : User = {
  id: 1,
  name: "John Doe",
  username: "johndoe",
  email: "vajkhsbja"
}

const PostOwnerPage = () => {
  return (
    <UserCard user={newUser} />
  )
}

export default PostOwnerPage