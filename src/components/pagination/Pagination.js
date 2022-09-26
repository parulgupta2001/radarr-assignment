import { Link } from "react-router-dom";
import "./pagination.css";

export function Pagination({ housesPerPage, totalHouses }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalHouses / housesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <div key={number} className="pagination-number">
          <Link to={`/products/${number}`}>{number}</Link>
        </div>
      ))}
    </div>
  );
}
