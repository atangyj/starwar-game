import { useDebugValue } from 'react';

const AttributeBadge = ({ label, value, modifier = 'dark' }) => (
  <div className={`align-self-center`}>
    {value === 'n/a' ? (
      'data lost in galaxy'
    ) : (
      <>
        <h6 className="mb-0">{label}</h6>
        <span className={`badge badge-${modifier} `}>{value}</span>
      </>
    )}
  </div>
);

export default AttributeBadge;
