const AttributeBadge = ({ label, modifier = 'light' }) => (
  <p className={`badge badge-${modifier} align-self-center`}>
    {label === 'n/a' ? 'data lost in galaxy' : label}
  </p>
);

export default AttributeBadge;
