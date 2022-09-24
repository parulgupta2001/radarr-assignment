import { Link } from "react-router-dom";

export function Pagination({ housesPerPage, totalHouses, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalHouses / housesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      className="pagination"
      style={{
        backgroundColor: "red",
        margin: "0 2rem 0.5rem 3rem",
        color: "white",
      }}
    >
      {pageNumbers.map((number) => (
        <div key={number}>
          <Link
            to={`/products/${number}`}
            onClick={() => {
              paginate(number);
            }}
          >
            {number}
          </Link>
        </div>
      ))}
    </div>
  );
}
