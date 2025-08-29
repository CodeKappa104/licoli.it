import fs from "fs";
import path from "path";
import Image from "next/image";

const Home = () => {
  const galleryDir = path.resolve("./public", "home");
  const imageFilenames = fs.readdirSync(galleryDir);

  return (
    <div className="mx-auto py-8 ">
      <div className="grid grid-cols-1">
        {imageFilenames.map((filename) => (
          <div
            key={filename}
            className="relative h-96 w-full"
            style={{ minHeight: "800px" }}
          >
            <Image
              src={`/home/${filename}`}
              alt={filename}
              fill={true}
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
