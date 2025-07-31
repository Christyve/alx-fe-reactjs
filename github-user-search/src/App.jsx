import { useState } from 'react';
import { fetchGitHubUser } from './services/githubService';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchGitHubUser(username);
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user:', error);
      setUserData(null);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {userData && (
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Username:</strong> {userData.login}</p>
          <p><strong>Name:</strong> {userData.name}</p>
          <a href={userData.html_url} target="_blank">View GitHub Profile</a>
        </div>
      )}
    </div>
  );
}

export default App;
