import "./user.css";

function UserCard({ user }) {
  return (
    <div className={`user_card ${user?.bg ? "bg-true" : "bg-false"}`}>
      <img src={user?.img} alt="" />
      <h3>{user?.name}</h3>
      <div className="jobs">
        <p>{user?.job1}</p>
        <p>{user?.job2}</p>
      </div>
    </div>
  );
}

export default UserCard;
