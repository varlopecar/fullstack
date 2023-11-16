import User from "../../models/User"

interface UserCardProps {
    user: User | null
}

const UserCard = ({ user }: UserCardProps) => {
    return (
        <div>
            <h2>{user?.name}</h2>
            <p>{user?.username}</p>
            <p>{user?.email}</p>
        </div>
    )
}

export default UserCard