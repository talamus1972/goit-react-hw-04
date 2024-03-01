import ImageCard from "../ImageCard/ImageCard.jsx"

export default function ImageGallery({ items }) {

    return (
        <ul>
            {items.map((item) => (
                <li key={item.objectID}>
                    <ImageCard item={item} />
                </li>
            ))}
        </ul>
    );
}