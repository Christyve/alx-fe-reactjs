import axios from 'axios';

// For advanced user search using query
export const fetchAdvancedUserData = async ({ username, location, repos }) => {
  let query = [];

  if (username) query.push(`${username} in:login`);
  if (location) query.push(`location:${location}`);
  if (repos) query.push(`repos:>=${repos}`);

  const searchQuery = query.join(' ');
  const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(searchQuery)}`);
  
  return response.data.items; // list of users
};
