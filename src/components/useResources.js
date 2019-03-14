import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = resource => {
  const [resources, setResources] = useState([]);

  useEffect(
    () => {
    (async() => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
  
      setResources(data)
    })(resource);
    },
    [resource]
  );
  
  return resources;
}

export default useResources;