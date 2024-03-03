import ImageCard from "../ImageCard/ImageCard.jsx";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onClick }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li className={css.item} key={item.id} onClick={onClick}>
          <ImageCard
            item={item}
            onClick={() => onClick(item.urls.regular, item.alt_description)}
          />
        </li>
      ))}
    </ul>
  );
}
