const AttributeBadge = ({ label, modifier = 'light' }) => (
  <span className={`badge badge-${modifier}`}>
    {label === 'n/a' ? 'data lost in galaxy' : label}
  </span>
);

export default AttributeBadge;
