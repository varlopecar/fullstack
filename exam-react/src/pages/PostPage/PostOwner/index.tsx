import UserCard from "../../../components/UserCard"
import { useUser } from "../../../hooks/useUser"

const PostOwnerPage = () => {
  const { user } = useUser()

  return (
    <UserCard user={user} />
  )
}

export default PostOwnerPage