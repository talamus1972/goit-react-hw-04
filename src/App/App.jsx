import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import { Audio } from 'react-loader-spinner'



export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  <Audio
  height="40"
  width="40"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>

axios.defaults.baseURL="http://hn.algolia.com/api/v1"

  const getArticles = async (newQuery) => {
    try {
      setLoading(true);
      setArticles([])
      const response = await axios.get("/search", {
        params: {
          query: newQuery,
        }
      });
      setArticles(response.data.hits);
    } catch (e) {
      setError(true)
    } finally {
         setLoading(false);
      
    }
  };

  const handleSearch = async (newQuery) => {
    getArticles(newQuery);
  };

  useEffect(() => {
    const defaultQuery = "";
    getArticles(defaultQuery);
  }, []); 

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <Audio />}
      {error && <ErrorMessage message="OOps!....."/>}
      {articles.length > 0 && <ImageGallery items={articles} />}
    </div>
  );
}