import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import Loader from "../Loader/Loader.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // 572515
  // Authorization: Client-ID YOUR_ACCESS_KEY
  //  gZuYWweutzjOLPBSOxTd_JFkbovfFGxduFYh-JTDS9w
  // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

  // axios.defaults.baseURL="http://hn.algolia.com/api/v1"
  axios.defaults.baseURL =
    "https://api.unsplash.com/photos/?client_id=gZuYWweutzjOLPBSOxTd_JFkbovfFGxduFYh-JTDS9w";

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const response = await axios.get("/search", {
          params: {
            query: searchQuery,
            hitsPerPage: 10,
            page,
          },
        });
        const data = response.data.results;
        setArticles((prevAticles) => {
          return [...prevAticles, ...data];
        });
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [page, searchQuery]);

  const handleSearch = async (newQuery) => {
    setSearchQuery(newQuery);
    setPage(1);
    setArticles([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader loading={isLoading} />}
      {error && <ErrorMessage />}
      {articles.length > 0 && <ImageGallery items={articles} />}
      {articles.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
}
