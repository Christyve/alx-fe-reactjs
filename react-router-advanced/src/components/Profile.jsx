import { Link, Routes, Route } from "react-router-dom";

// Sub-components for nested routing
function ProfileDetails() {
  return <h3>Profile Details Section</h3>;
}

function ProfileSettings() {
  return <h3>Profile Settings Section</h3>;
}

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested Routes inside Profile */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
