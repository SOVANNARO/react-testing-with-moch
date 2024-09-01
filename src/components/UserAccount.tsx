import { User } from "../../entities";

interface IUserAccountProps {
  user: User;
}
const UserAccount = ({ user }: IUserAccountProps) => {
  return (
    <>
      <h2>User Profile</h2>
      {user.isAdmin && <button>Edit</button>}
      <div>
        <strong>Name:</strong> {user.name}
      </div>
    </>
  );
};

export default UserAccount;
