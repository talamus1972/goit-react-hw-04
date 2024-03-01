import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";


export default function App() {
const [articles, setArticles]=useState([])
  useEffect(() => {
    // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
    // gZuYWweutzjOLPBSOxTd_JFkbovfFGxduFYh-JTDS9w
    async function getArticles() {
      const response = await axios.get("http://hn.algolia.com/api/v1/search?query=cat")
      setArticles(response.data.hits)
      
    }
    getArticles()
  },[])
  return (
    <div>
       <SearchBar />
      {articles.length > 0 && <ImageGallery items={articles} />}
     
    </div>
  );
}



// import axios from "axios";
// import { useEffect, useState } from "react";
// import SearchBar from "../SearchBar/SearchBar.jsx";
// import ImageGallery from "../ImageGallery/ImageGallery.jsx";

// export default function App() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function getArticles() {
//       try {
//         const response = await axios.get("http://hn.algolia.com/api/v1/search?query=cat");
//         setArticles(response.data.hits);
//       } catch (error) {
//         setError("Error fetching data");
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     getArticles();
//   }, []);

//   return (
//     <div>
//       <SearchBar />
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         articles.length > 0 && <ImageGallery items={articles} />
//       )}
//     </div>
//   );
// }
