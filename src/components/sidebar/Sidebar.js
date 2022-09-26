import "./sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { sort, houseRating, reset } from "../../features/index";

export function Sidebar() {
  const dispatch = useDispatch();
  const { sortOrder, rating } = useSelector((store) => store.filter);
  return (
    <aside className="sidebar">
      <div className="sorting">
        <div className="price-sorting">
          <div className="filter-header">Sort By</div>
          <div>
            <input
              type="radio"
              name="sort"
              className="filter-input"
              onChange={() => dispatch(sort("INCREASING"))}
              checked={sortOrder === "INCREASING"}
            ></input>
            <label htmlFor="low_to_high">Price - Low to high</label>
          </div>

          <div>
            <input
              type="radio"
              name="sort"
              className="filter-input"
              onChange={() => dispatch(sort("DECREASING"))}
              checked={sortOrder === "DECREASING"}
            ></input>
            <label htmlFor="high_to_low">Price - High to Low</label>
          </div>
        </div>

        <div className="product-rating">
          <div className="filter-header">Rating</div>
          <div>
            <input
              type="radio"
              name="rating"
              className="filter-input"
              onChange={() => dispatch(houseRating("4"))}
              checked={rating === "4"}
            ></input>
            <label>&#11088;&#11088;&#11088;&#11088;&up</label>
          </div>

          <div>
            <input
              type="radio"
              name="rating"
              className="filter-input"
              onChange={() => dispatch(houseRating("3"))}
              id="three_and_above"
              checked={rating === "3"}
            ></input>
            <label htmlFor="three_and_above">&#11088;&#11088;&#11088;&up</label>
          </div>

          <div>
            <input
              type="radio"
              name="rating"
              className="filter-input"
              onChange={() => dispatch(houseRating("2"))}
              checked={rating === "2"}
            ></input>
            <label htmlFor="two_and_above"> &#11088;&#11088;&up</label>
          </div>

          <div>
            <input
              type="radio"
              name="rating"
              className="filter-input"
              onChange={() => dispatch(houseRating("1"))}
              checked={rating === "1"}
            ></input>
            <label htmlFor="one_and_above"> &#11088;&up</label>
          </div>
        </div>
      </div>

      <button className="clear-btn" onClick={() => dispatch(reset())}>
        Reset All Filters
      </button>
    </aside>
  );
}
