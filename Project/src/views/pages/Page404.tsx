import { Link } from "react-router";
import "../../assets/compiled/css/error.css"
import Error404Img from "../../assets/img/error-404.svg"

const Page404 = () => {
  return (
    <div id="error">
      <div className="error-page container">
        <div className="col-md-8 col-12 offset-md-2">
          <div className="text-center">
            <img className="img-error" src={Error404Img} alt="Not Found" />
            <h1 className="error-title">Not Found</h1>
            <p className="fs-5 text-gray-600">The page you are looking not found.</p>
            <Link to="/" className="btn btn-lg btn-outline-primary mt-3">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
