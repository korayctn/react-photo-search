import axios from "axios";
const searchImg = async (value) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID GIWhhrY7NNFN0cAWBKWQf7al2L9-dJ-ZHh5GERdA7Hw",
    },
    params: {
      query: value,
    },
  });
  console.log(response.data.results);
  return response.data.results;
};

export default searchImg;
