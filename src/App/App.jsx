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
  
 

axios.defaults.baseURL="http://hn.algolia.com/api/v1"

  useEffect(() => {
    if (searchQuery === "") {
      return
    }
    async function getData() {
      try {
      setIsLoading(true);
      setError(false)
      const response = await axios.get("/search", {
        params: {
          query: searchQuery,
          hitsPerPage: 10,
          page
        }
      });
        const data= response.data.hits
        setArticles((prevAticles) => {
        return [...prevAticles, ...data]
      });
    } catch (e) {
      setError(true)
    } finally {
      setIsLoading(false);
      
    }
    }
    getData()
  }, [page, searchQuery]); 
  
  
  const handleSearch = async (newQuery) => {
    setSearchQuery(newQuery);
    setPage(1)
    setArticles([])
  };

  const handleLoadMore = () => {
    setPage(page + 1)
  }
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader loading={isLoading} />}
      {error && <ErrorMessage message="OOps! Error! Reload" />}
      {articles.length > 0 && <ImageGallery items={articles} />}
      {articles.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
    </div>
  );
}