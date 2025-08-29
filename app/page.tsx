import fs from "fs";
import path from "path";
import Image from "next/image";

const Home = () => {
  const galleryDir = path.resolve("./public", "home");
  const imageFilenames = fs.readdirSync(galleryDir);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-4">
        {/* {imageFilenames.map((filename) => (
          <div key={filename} className="relative h-screen w-full">
            <Image
              src={`/home/${filename}`}
              alt={filename}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))} */}
        <div className="relative h-screen w-full">
          <Image
            src={`/home/1ithink.jpg`}
            alt={`1ithink`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
