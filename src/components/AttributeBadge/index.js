import { useDebugValue } from 'react';

const AttributeBadge = ({ label, value, modifier = 'light' }) => (
  <p className={`badge badge-${modifier} align-self-center`}>
    {value === 'n/a' ? 'data lost in galaxy' : label + value}
  </p>
);

export default AttributeBadge;
