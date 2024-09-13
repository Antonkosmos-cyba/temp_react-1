import { Link, useMatch } from "react-router-dom";

const CustLink = ({ children, to, ...props }) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      style={{
        color: match ? "#11f542" : "#fff",
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export { CustLink };
