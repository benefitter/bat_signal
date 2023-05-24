import { useQuery } from 'react-query';
import axios from 'axios';

const fetchGroups = async () => {
  const { data } = await axios.get('http://localhost:3000/benefitter/batsignal/groups');
  console.log('FETCHING', data)
  return data;
};

const useGroups = () => useQuery('groups', fetchGroups);
export default useGroups;