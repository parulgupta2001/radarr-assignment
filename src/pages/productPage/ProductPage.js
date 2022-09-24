import { ProductCard } from "../../components/productCard/ProductCard";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Pagination } from "../../components/pagination/Pagination";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function ProductPage() {
  const pageNumber = useParams();
  const [housesData, setHousesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const housesPerPage = 10;

  console.log(pageNumber);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "https://www.anapioficeandfire.com/api/houses?pageSize=50"
      );
      setHousesData(res.data);
    })();
  }, []);

  const indexOfLastCard = currentPage * housesPerPage;
  const indexOfFirstCard = indexOfLastCard - housesPerPage;
  const currentCards = housesData.slice(indexOfFirstCard, indexOfLastCard);
  console.log(currentCards);

  const paginate = (number) => setCurrentPage(number);

  return (
    <>
      <div className="product-container">
        <Sidebar />
        <ProductCard housesData={currentCards} />
      </div>
      <Pagination
        style={{
          display: "flex",
          backgroundColor: "red",
          padding: "0 4rem 0 4rem",
        }}
        housesPerPage={housesPerPage}
        totalHouses={housesData.length}
        paginate={paginate}
      />
    </>
  );
}
