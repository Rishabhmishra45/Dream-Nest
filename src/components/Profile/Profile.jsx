import React, { useContext } from "react";
import { DataContext } from "../../Context/Usercontext";

const Profile = () => {
  const { user, setUser } = useContext(DataContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Hello, {user}</h2>
      <button onClick={() => setUser("Mishra")}>Change Name</button>
    </div>
  );
};

export default Profile;
