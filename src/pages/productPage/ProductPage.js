import { ProductCard, Sidebar, Pagination } from "../../components/index";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { data } from "../../features/index";
import axios from "axios";

export function ProductPage() {
  const { pageNumber } = useParams();
  const { filteredData } = useSelector((store) => store.filter);
  const [newHouseData, setNewHouseData] = useState([]);
  const dispatch = useDispatch();
  const housesPerPage = 10;

  useEffect(() => {
    dispatch(data());
  }, []);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos?page=1&query=mountains&client_id=D5BKggh_m2pgUB9QtR04IBeSH7e5rcCLMVsdnsbi6Ug&per_page=30"
      );
      const imageData = response.data.results;
      let arr = [];
      for (let i = 0; i < 30; i++) {
        arr.push({
          ...filteredData[i],
          houseImage: imageData[i].urls.regular,
        });
      }
      setNewHouseData(arr);
    })();
  }, [filteredData]);

  const indexOfLastCard = pageNumber * housesPerPage;
  const indexOfFirstCard = indexOfLastCard - housesPerPage;
  let currentCards;
  if (newHouseData?.length !== 0) {
    currentCards = newHouseData?.slice(indexOfFirstCard, indexOfLastCard);
  }

  return (
    <>
      <div className="product-container">
        <Sidebar />
        {currentCards && <ProductCard housesData={currentCards} />}
      </div>
      <Pagination
        style={{
          display: "flex",
          backgroundColor: "red",
          padding: "0 4rem 0 4rem",
        }}
        housesPerPage={housesPerPage}
        totalHouses={30}
      />
    </>
  );
}
