import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, images, id }) => {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <Image src={images} alt="..." width={350} height={350} />
      <h3 className="font-bold md:text-xl p-4 text-center text-md">{title}</h3>
    </Link>
  );
};

export default AnimeList;
