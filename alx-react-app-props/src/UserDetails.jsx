import React, { useContext } from 'react';
import UserContext from './context/UserContext'; // ✅ Correct default import

function UserDetails() {
  const user = useContext(UserContext); // ✅ Access context value

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;
