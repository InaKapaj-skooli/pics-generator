import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID bpR4Ia9_fHuGDlaxuPlbiMaidWl6Qx57B3Zsg2FLrgo",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
