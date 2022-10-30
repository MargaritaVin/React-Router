import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <p className="error-text">Oops, something went wrong</p>
      <h3 className="error-text">Page not found</h3>
      <Link to="/" className="link-home">Go to Home page</Link>
    </>
  );
};



