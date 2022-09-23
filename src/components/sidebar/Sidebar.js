import "./sidebar.css";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sorting">
        <div className="price-sorting">
          <div className="filter-header">Sort By</div>
          <div>
            <input type="radio" name="sort" className="filter-input"></input>
            <label htmlFor="low_to_high">Price - Low to high</label>
          </div>

          <div>
            <input type="radio" name="sort" className="filter-input"></input>
            <label htmlFor="high_to_low">Price - High to Low</label>
          </div>
        </div>

        <div>
          <input
            type="range"
            className="filter-input"
            min="345"
            max="10000"
            name="range"
          ></input>
        </div>

        <div>
          <input type="checkbox" className="filter-input"></input>
          <label htmlFor="entry">Free Entry Houses</label>
        </div>

        <div className="product-rating">
          <div className="filter-header">Rating</div>
          <div>
            <input type="radio" name="rating" className="filter-input"></input>
            <label>&#11088;&#11088;&#11088;&#11088;&up</label>
          </div>

          <div>
            <input type="radio" name="rating" className="filter-input"></input>
            <label htmlFor="three_and_above">&#11088;&#11088;&#11088;&up</label>
          </div>

          <div>
            <input type="radio" name="rating" className="filter-input"></input>
            <label htmlFor="two_and_above"> &#11088;&#11088;&up</label>
          </div>

          <div>
            <input type="radio" name="rating" className="filter-input"></input>
            <label htmlFor="one_and_above"> &#11088;&up</label>
          </div>
        </div>
      </div>

      <button className="clear-btn">Reset All Filters</button>
    </aside>
  );
}
