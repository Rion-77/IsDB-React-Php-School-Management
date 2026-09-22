import { useState } from "react";
import { useNavigate } from "react-router";
import { api } from "../../../config";
import { Link } from "react-router";
import "../../../assets/compiled/css/auth.css";
import logo from "../../../assets/img/logo.png";

const Login = () => {
  const [user, setUser] = useState({ email: "admin@mail.com", password: "123" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = function () {
    api
      .post("login", user)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("bearer_token", res.data.token);
          setMsg("");
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.response.status == 401) setMsg(err.response.data);
        else setMsg("⚠ Something went wrong. Login failed!");
      });
  };

  return (
    <div id="auth">
      <div className="row h-100">
        <div className="col-lg-5 col-12">
          <div id="auth-left">
            <div className="auth-logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <h1 className="auth-title">Log in.</h1>
            <p className="auth-subtitle mb-3">Log in with your data that you entered during registration.</p>

            <form>
              {/* Email Input */}
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="text"
                  className="form-control form-control-xl"
                  placeholder="Username"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <div className="form-control-icon">
                  <i className="bi bi-person"></i>
                </div>
              </div>
              {/* Password Input */}
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="password"
                  className="form-control form-control-xl"
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <div className="form-control-icon">
                  <i className="bi bi-shield-lock"></i>
                </div>
              </div>
              {/* <div className="form-check form-check-lg d-flex align-items-end">
                <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label text-gray-600" htmlFor="flexCheckDefault">
                  Keep me logged in
                </label>
              </div> */}
              {/* Submit Button */}
              <p>{msg}</p>
              <button type="button" onClick={handleSubmit} className="btn btn-primary btn-block btn-lg shadow-lg mt-3">Log in</button>
            </form>
            {/* <div className="text-center mt-3 text-sm fs-6">
              <p className="text-gray-600 mb-1">
                Don't have an account?{" "}
                <a href="auth-register.html" className="font-bold">
                  Sign up
                </a>
                .
              </p>
              <p>
                <a className="font-bold" href="auth-forgot-password.html">
                  Forgot password?
                </a>
                .
              </p>
            </div> */}
          </div>
        </div>
        <div className="col-lg-7 d-none d-lg-block">
          <div id="auth-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
