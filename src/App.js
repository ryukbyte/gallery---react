import ImageCard from "./ImageCard";
import "./App.css";

function App() {
  const images = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      title: "Mountain Landscape",
      description:
        "A beautiful mountain landscape surrounded by nature.",
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      title: "Beautiful Nature",
      description:
        "A peaceful view of nature with mountains and trees.",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      title: "Mountain Lake",
      description:
        "A calm lake surrounded by beautiful green mountains.",
    },
    {
      id: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      title: "Forest View",
      description:
        "A scenic view of a forest and mountains.",
    },
    {
      id: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      title: "Rocky Mountains",
      description:
        "A stunning view of rocky mountains under the sky.",
    },
    {
      id: 6,
      imageUrl:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      title: "Green Forest",
      description:
        "A peaceful green forest filled with beautiful trees.",
    },
  ];

  return (
    <>
      <header className="gallery-header">
        <h1>My Image Gallery</h1>
        <p>Explore beautiful moments captured in nature.</p>
      </header>

      <main className="gallery">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            imageUrl={image.imageUrl}
            title={image.title}
            description={image.description}
          />
        ))}
      </main>
    </>
  );
}

export default App;