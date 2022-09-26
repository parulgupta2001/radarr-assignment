import { FaShoppingCart } from "react-icons/fa";
import { AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { GiSwordman } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../features/index";
import "./navbar.css";

export function Navbar() {
  const { isLoggedIn } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navigation-bar">
        <div className="upper-nav">
          {isLoggedIn ? (
            <div className="log-out">
              <BiLogOut className="log-out-icon" />
              <div onClick={() => dispatch(logout())}>Logout</div>
            </div>
          ) : (
            <div className="log-in">
              <BiLogIn className="log-in-icon" />
              <div onClick={() => navigate("/login")}>Login</div>
            </div>
          )}
        </div>
        <div className="main-nav">
          <Link to="/">
            <div className="logo-container">
              <GiSwordman className="logo" />
              Inside HOUSE
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}
