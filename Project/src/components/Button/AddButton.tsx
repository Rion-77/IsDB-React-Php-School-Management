import { Link } from "react-router";

const AddButton = ({ to, text }: { to: string; text: string }) => {
  return (
    <Link to={to} className="btn icon icon-left btn-primary">
      <i className="bi bi-plus"></i>
      {text}
    </Link>
  );
};

export default AddButton;
