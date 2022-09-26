export const getSortedData = (state) => {
  if (state.sortOrder === "INCREASING") {
    return state.filteredData.sort((a, b) => a.name.length - b.name.length);
  } else if (state.sortOrder === "DECREASING") {
    return state.filteredData.sort((a, b) => b.name.length - a.name.length);
  } else {
    return state.filteredData;
  }
};

export const getRatingData = (state) => {
  switch (state.rating) {
    case "1":
      return state.houseData.filter((house) => house.name.length / 6 >= 1);
    case "2":
      return state.houseData.filter((house) => house.name.length / 6 >= 2);
    case "3":
      return state.houseData.filter((house) => house.name.length / 6 >= 3);
    case "4":
      return state.houseData.filter((house) => house.name.length / 6 >= 4);
    default:
      return state.houseData;
  }
};
