import "./landingPage.css";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <img
        src="http://res.cloudinary.com/dwhran9qg/image/upload/got/final_got_1_fgm8tp.png"
        alt="landing-page-img"
      />
      <button
        className="house-entry-button"
        onClick={() => navigate("/products/1")}
      >
        Click Here
      </button>
      <p>To Get Into Your Favourite House</p>
    </div>
  );
}
