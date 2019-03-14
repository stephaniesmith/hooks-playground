import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul>
      {resources.map(({ id, title }) => <li key={id}>{title}</li>)}
    </ul>
  );
};

export default ResourceList;
