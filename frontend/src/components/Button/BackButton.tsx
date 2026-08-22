import { Link } from "react-router";

const BackButton = ({ to, text }: { to: string; text: string }) => {
  return (
    <Link to={to} className="btn icon icon-left btn-outline-primary">
      <i className="bi bi-box-arrow-left me-1"></i>
      {text}
    </Link>
  );
};

export default BackButton;
