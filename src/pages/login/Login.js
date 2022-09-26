import "./login.css";
import { login } from "../../features/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="authorization-page">
      <form className=" authorization-container login-container">
        <h2>Login</h2>
        <div className="input email-label">
          <div>
            <label htmlFor="name" className="input-email-label">
              Email
            </label>
          </div>
          <div>
            <input type="email" required className="email-input user-input" />
          </div>
        </div>
        <div className="input password-label">
          <div>
            <label htmlFor="password" className="input-password-label">
              Password
            </label>
          </div>
          <div>
            <input
              type="password"
              required
              className="password-input user-input"
            />
            <div> Forgot Password?</div>
          </div>
        </div>
        <div className="submit-buttons">
          <button
            className="testing-btn authorization-page-btn"
            onClick={() => {
              dispatch(login());
              navigate("/products/1");
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
