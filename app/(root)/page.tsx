import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1,name:'niaz' },
      _id: 1,
      description: "this is a description",
      image:
        "https://images.pexels.com/photos/176842/pexels-photo-176842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Robots",
      title: "Paper made",
    },
  ];
  return (
    <>
      {/* hero */}
      <section className="terra_cotta_container">
        <h2 className="heading">
          Pitch your Startup,
          <br />
          Connect with Entrepreneurs
        </h2>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      {/* container */}
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Result for "${query}" ` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post:StartupCardType) => <StartupCard key={post?._id} post={post} />)
          ) : (
            <p className="no-results">No startup Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
