import { useState } from 'react';
import { fetchAdvancedUserData as fetchUserData} from '../services/githubService';

function Search() {
  const [form, setForm] = useState({
    username: '',
    location: '',
    minRepos: '',
  });

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const results = await fetchUserData(form);
      setUsers(results);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-semibold">Advanced GitHub User Search</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="minRepos"
          placeholder="Minimum Repositories"
          value={form.minRepos}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p>Looks like we cant find the user</p>}
        {users.length > 0 && (
          <ul className="space-y-4">
            {users.map((user) => (
              <li key={user.id} className="border p-4 rounded">
                <div className="flex items-center gap-4">
                  <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                  <div>
                    <p><strong>{user.login}</strong></p>
                    <p>Type: {user.type}</p>
                    <a href={user.html_url} className="text-blue-500" target="_blank">View Profile</a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
