import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import Loader from "../Loader/Loader.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // ====================================================================
  const [modal, setModal] = useState(false);
  const [url, setUrl] = useState("");

  const toggleModal = (url) => {
    setModal(!modal);
    setUrl(url);
  };

  // ====================================================================

  axios.defaults.baseURL = "https://api.unsplash.com/search/";

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const response = await axios.get("photos", {
          params: {
            query: searchQuery,
            client_id: "gZuYWweutzjOLPBSOxTd_JFkbovfFGxduFYh-JTDS9w",
            per_page: 12,
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
      {error && <ErrorMessage />}

      {articles.length > 0 && (
        <ImageGallery items={articles} onClick={toggleModal} />
      )}

      {isLoading && <Loader loading={isLoading} />}
      {articles.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      {modal && <ImageModal isOpen={modal} url={url} onClose={toggleModal} />}
    </div>
  );
}
