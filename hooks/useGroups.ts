import { useQuery } from 'react-query';
import axios from 'axios';

const fetchGroups = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/groups');
  console.log('FETCHING', data)
  return data;
};

const useGroups = () => useQuery('groups', fetchGroups);
export default useGroups;