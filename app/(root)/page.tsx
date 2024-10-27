import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="terra_cotta_container">
        <h2 className="heading">
          Pitch your Startup,
          <br />
          Connect with Entrepreneurs
        </h2>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas,Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
