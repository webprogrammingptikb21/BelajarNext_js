import AnimeList from "@/app/components/AnimeList";
const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`);
  const anime = await response.json();

  return (
    <div>
      <h1>Paling Populer</h1>
      <div className="grid gap-4 md:grid-cols-5 sm:grid-cols-3 grid-cols-2">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
