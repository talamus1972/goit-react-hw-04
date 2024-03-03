import ImageCard from "../ImageCard/ImageCard.jsx";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onClick }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li
          className={css.item}
          key={item.id}
          onClick={() => onClick(item.urls.regular, item.alt_description)}
        >
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
}
