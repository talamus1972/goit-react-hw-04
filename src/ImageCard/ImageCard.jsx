export default function ImageCard({item}) {
    return (
        <div>
            <a href={item.url}>{item.title}</a>
        </div>
    );
}