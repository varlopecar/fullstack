import { User } from "../../models/User"

const Profile = ({ user }: { user: User | null }) => {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <span>
                <strong>Name: </strong>{user?.name}
            </span>
            <br />
            <span>
                <strong>City: </strong>{user?.address.city}
            </span>
            <br />
            <span>
                <strong>Company: </strong>{user?.company.name}
            </span>
        </div>
    )
}

export default Profile