import { FaShoppingCart } from "react-icons/fa";
import { AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { GiSwordman } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
          <div className="logo-container">
            <GiSwordman className="logo" />
            Inside HOUSE
          </div>
          <div className="search-bar">
            <div>
              <input type="search" placeholder="Search..." />
              <AiOutlineSearch className=" product-search-icon" />
            </div>
          </div>

          <div className="page-container">
            <div>
              <AiFillHeart
                className="wishlist"
                style={{ color: "var(--background-color-two)" }}
              />
              <div className="dot-wishlist dot"></div>
            </div>
            <div>
              <FaShoppingCart
                className="shopping-cart"
                style={{ color: "var(--background-color-two)" }}
              />
              <div className="dot-cart dot"></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
